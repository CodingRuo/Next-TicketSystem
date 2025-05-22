"use server";

import {
    ActionState,
    fromErrorToActionState
} from "@/components/form/utils/to-action-state";
import { createSession } from "@/lib/lucia";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";
import { generateRandomToken } from "@/utils/crypto";
import { redirect } from "next/navigation";
import { z } from "zod";
import { setSessionCookie } from "../utils/session-cookie";

const emailVerficationSchema = z.object({
    code: z.string().length(8),
});

export const emailVerfication = async (_actionState: ActionState, formData: FormData) => {
    try {
        const { code } = emailVerficationSchema.parse(
            Object.fromEntries(formData)
        );

        await prisma.session.deleteMany({
            where: { userId: '' }
        })


        const sessionToken = generateRandomToken();
        const session = await createSession(sessionToken, user.id);

        await setSessionCookie(sessionToken, session.expiresAt);
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    redirect(ticketsPath());
};