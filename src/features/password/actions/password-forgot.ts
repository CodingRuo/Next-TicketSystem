"use server";

import {
    ActionState,
    fromErrorToActionState,
    toActionState
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const passwordForgotSchema = z.object({
    email: z.string().min(1, { message: "Is required" }).max(191).email()
});

export const passwordForgot = async (_actionState: ActionState, formData: FormData) => {
    try {
        const { email } = passwordForgotSchema.parse(
            Object.fromEntries(formData)
        );

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return toActionState("ERROR", "Incorrect email.", formData);
        }

        // TODO: Send email with the reset link
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    return toActionState("SUCCESS", "Check your email for a reset link");
};