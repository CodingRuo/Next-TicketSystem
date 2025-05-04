import { Ticket } from "@/generated";
import { prisma } from "@/lib/prisma";

export const getTickets = async (): Promise<Ticket[]> => {
    return await prisma.ticket.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
};

export const getTicket = async (id: string): Promise<Ticket | null> => {
    return await prisma.ticket.findUnique({
        where: {
            id
        }
    })
}