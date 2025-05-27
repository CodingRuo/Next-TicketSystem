export const homePath = (): string => "/";

export const ticketsPath = (): string => "/tickets";
export const ticketPath = (ticketId: string): string => `/tickets/${ticketId}`;
export const ticketEditPath = (ticketId: string): string => `/tickets/${ticketId}/edit`;

export const signUpPath = () => "/sign-up";
export const signInPath = () => "/sign-in";

export const passwordForgotPath = () => "/password-forgot";
export const passwordResetPath = () => "/password-reset";

export const accountProfilePath = () => "/account/profile";
export const accountPasswordPath = () => "/account/password";

export const emailVerificationPath = () => '/email-verification';
export const onboardingPath = () => '/onboarding';

export const organizationsPath = () => '/organization';
export const organizationCreatePath = () => '/organization/create';