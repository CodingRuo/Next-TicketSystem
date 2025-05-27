import { format } from "date-fns";
import { getOrganizationsByUser } from "../queries/get-organizations-by-user";

const OrganizationList = async () => {
    const organizations = await getOrganizationsByUser();

    return (
        <div className="flex flex-col gap-y-4">
            {organizations.map((organization) => (
                <div key={organization.id}>
                    <div>Name: {organization.name}</div>
                    <div>Joined At: {format(organization.membershipByUser.joinedAt, "yyyy-MM-dd, HH:mm")}</div>
                </div>
            ))}
        </div>
    )
}

export { OrganizationList };
