"use server";

import { setCookieByKey } from "@/actions/cookies";
import {
    ActionState,
    fromErrorToActionState,
    toActionState
} from "@/components/form/utils/to-action-state";
import { createSession } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";
import { generateRandomToken } from "@/utils/crypto";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getAuthOrRedirect } from "../queries/get-auth-or-redirect";
import { setSessionCookie } from "../utils/session-cookie";
import { validateEmailVerificationCode } from "../utils/validate-email-verification-code";

const emailVerficationSchema = z.object({
    code: z.string().length(8),
});

export const emailVerification = async (_actionState: ActionState, formData: FormData) => {
    const { user } = await getAuthOrRedirect({
        checkEmailVerified: false,
        checkOrganizations: false
    });
    try {
        const { code } = emailVerficationSchema.parse(
            Object.fromEntries(formData)
        );

        const validCode = await validateEmailVerificationCode(user.id, user.email, code);

        if (!validCode) {
            return toActionState("ERROR", "Invalid or expired code");
        }

        await prisma.session.deleteMany({
            where: { userId: user.id }
        });

        await prisma.user.update({
            where: { id: user.id },
            data: { emailVerified: true }
        })

        const sessionToken = generateRandomToken();
        const session = await createSession(sessionToken, user.id);

        await setSessionCookie(sessionToken, session.expiresAt);
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    await setCookieByKey("toast", "Email verified");
    redirect(ticketsPath());
};