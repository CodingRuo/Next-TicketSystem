import { CardCompact } from "@/components/card-compact";
import { OrganizationCreateForm } from "@/features/organizations/components/organization-create-form";

const OrganizationCreatePage = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact
                title="Create organization"
                description="Create an new organization for your team"
                className="w-full max-w-[420px] animate-fade-from-top"
                content={<OrganizationCreateForm />}
            />
        </div>
    )
}

export default OrganizationCreatePage;