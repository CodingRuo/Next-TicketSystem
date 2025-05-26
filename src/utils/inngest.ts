import { EmailVerificationFunctionArgs } from "@/features/auth/events/event-email-verification";
import { PasswordResetFunctionArgs } from "@/features/password/events/event-password-reset";
import { EventSchemas, Inngest } from "inngest";

type Events = {
    "app/password.password-reset": PasswordResetFunctionArgs
    "app/auth.sign-up": EmailVerificationFunctionArgs
}

export const inngest = new Inngest({
    id: 'the-road-to-next',
    schemas: new EventSchemas().fromRecord<Events>()
});