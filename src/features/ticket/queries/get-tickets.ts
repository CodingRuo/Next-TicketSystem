import { cache } from "react";
import { Ticket } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export const getTickets = async (): Promise<Ticket[]> => {
    return await prisma.ticket.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
};

export const getTicket = cache(async (id: string): Promise<Ticket | null> => {
    return await prisma.ticket.findUnique({
        where: {
            id
        }
    })
})