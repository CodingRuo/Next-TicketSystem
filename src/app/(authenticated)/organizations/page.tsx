import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { OrganizationList } from "@/features/organizations/components/organization-list";
import { Suspense } from "react";

const OrganizationPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Organizations" description="All your organizations" />

            <Suspense fallback={<Spinner />}>
                <OrganizationList />
            </Suspense>
        </div>
    )
}

export default OrganizationPage;