import { prisma } from "@/lib/prisma";
import { inngest } from "@/utils/inngest";
import { sendEmailPasswordReset } from "../emails/send-email-password-reset";
import { generatePasswordResetLink } from "../utils/generate-password-reset-link";

export type PasswordResetFunctionArgs = {
    data: {
        userId: string
    }
}

export const passwordResetFunction = inngest.createFunction(
    { id: 'send-password-reset' },
    { event: 'app/password.password-reset' },
    async ({ event }) => {
        const { userId } = event.data;

        const user = await prisma.user.findUniqueOrThrow({
            where: { id: userId },
        });

        const passworResetLink = await generatePasswordResetLink(user.id);

        const result = await sendEmailPasswordReset(
            user.username,
            user.email,
            passworResetLink
        );

        if (result.error) {
            throw new Error(`${result.error.name}: ${result.error.message}`);
        }

        return {
            event,
            body: result
        }
    }
)