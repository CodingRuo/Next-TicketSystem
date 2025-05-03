import { intitialTickets } from "@/data";
import { Ticket } from "../types";

export const getTickets = async (): Promise<Ticket[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return new Promise((resolve) => {
        resolve(intitialTickets)
    });
};

export const getTicket = async (id: string): Promise<Ticket | null> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const maybeTicket = intitialTickets.find((ticket) => ticket.id === id);

    return new Promise((resolve) => {
        resolve(maybeTicket || null);
    });
}