import { emailVerificationFunction } from "@/features/auth/events/event-email-verification";
import { passwordResetFunction } from "@/features/password/events/event-password-reset";
import { inngest } from "@/utils/inngest";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        passwordResetFunction,
        emailVerificationFunction
    ]
});