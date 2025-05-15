import { Ticket } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { ParsedSearchParams } from "../search-params";

export const getTickets = async (userId: string | undefined, searchParams: ParsedSearchParams): Promise<Ticket[]> => {
    return await prisma.ticket.findMany({
        where: {
            userId,
            ...(typeof searchParams.search === "string" && {
                title: {
                    contains: searchParams.search,
                    mode: "insensitive"
                }
            }),
        },
        orderBy: {
            [searchParams.sortKey]: searchParams.sortValue
        },
        include: {
            user: {
                select: {
                    username: true
                }
            }
        }
    });
};