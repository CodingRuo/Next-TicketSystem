import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { PasswordForgotForm } from "@/features/password/components/password-forgot-form";
import { AccountTabs } from "../_navigation/tabs";

const PasswordPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading
                title="Password"
                description="Keep ypur account secure"
                tabs={<AccountTabs />}
            />

            <div className="flex-1 flex flex-col items-center">
                <CardCompact
                    title="Change Password"
                    description="Enter your current password"
                    className="w-full max-w-[420px] animate-fade-from-top"
                    content={<PasswordForgotForm />}
                />
            </div>
        </div>
    )
}

export default PasswordPage;