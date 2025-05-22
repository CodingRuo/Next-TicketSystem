import { serve } from "inngest/next";
import { passwordResetFunction } from "@/features/password/events/event-password-reset";
import { inngest } from "@/utils/inngest";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        passwordResetFunction
    ]
});