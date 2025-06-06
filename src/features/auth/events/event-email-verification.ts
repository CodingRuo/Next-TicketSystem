import { prisma } from "@/lib/prisma";
import { inngest } from "@/utils/inngest";
import { sendEmailVerification } from "../emails/send-email-verification";
import { generateEmailVerificationCode } from "../utils/generate-email-verification-code";

export type EmailVerificationFunctionArgs = {
    data: {
        userId: string
    }
}

export const emailVerificationFunction = inngest.createFunction(
    { id: 'email-verification' },
    { event: 'app/auth.sign-up' },
    async ({ event }) => {
        const { userId } = event.data;

        const user = await prisma.user.findFirstOrThrow({
            where: { id: userId }
        })

        const verificationCode = await generateEmailVerificationCode(user.id, user.email);

        const result = await sendEmailVerification(user.username, user.email, verificationCode);

        if (result.error) {
            throw new Error(`${result.error.name}: ${result.error.message}`);
        }

        return { event, body: result }
    }
)