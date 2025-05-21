"use server";

import {
    ActionState,
    fromErrorToActionState,
    toActionState
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { z } from "zod";
import { sendEmailPasswordReset } from "../emails/send-email-password-reset";
import { generatePasswordResetLink } from "../utils/generate-password-reset-link";
import { verifyPasswordHash } from "../utils/hash-and-verify";

const passwordChangeSchema = z.object({
    password: z.string().min(6).max(191),
});

export const passwordChange = async (_actionState: ActionState, formData: FormData) => {

    const auth = await getAuthOrRedirect();

    try {
        const { password } = passwordChangeSchema.parse(
            Object.fromEntries(formData)
        );

        const validPassword = await verifyPasswordHash(
            auth.user.passwordHash,
            password
        );

        if (!validPassword) {
            return toActionState("ERROR", "Incorrect password", formData);
        }

        const passworResetLink = await generatePasswordResetLink(auth.user.id);

        await sendEmailPasswordReset(auth.user.username, auth.user.email, passworResetLink);
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    return toActionState("SUCCESS", "Check your email for a reset link");
};