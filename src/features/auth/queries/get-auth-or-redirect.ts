import { getOrganizationsByUser } from "@/features/organizations/queries/get-organizations-by-user";
import { emailVerificationPath, onboardingPath, signInPath } from "@/path";
import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";

type GetAuthOrRedirectOptions = {
    checkEmailVerified?: boolean;
    checkOrganizations?: boolean;
}

export const getAuthOrRedirect = async (options?: GetAuthOrRedirectOptions) => {
    const {
        checkEmailVerified = true,
        checkOrganizations = true
    } = options ?? {};

    const auth = await getAuth();

    if (!auth.user) {
        redirect(signInPath());
    }

    if (checkEmailVerified && !auth.user.emailVerified) {
        redirect(emailVerificationPath());
    }


    if (checkOrganizations) {
        const organizations = await getOrganizationsByUser();

        if (!organizations.length) {
            redirect(onboardingPath());
        }
    }

    return auth;
}