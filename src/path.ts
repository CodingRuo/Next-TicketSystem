export const homePath    = (): string => "/";
export const ticketsPath = (): string => "/tickets";
export const ticketPath  = (ticketId: string): string => `/tickets/${ticketId}`;
export const ticketEditPath = (ticketId: string): string => `/tickets/${ticketId}/edit`;