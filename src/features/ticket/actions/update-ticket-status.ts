"use server";

import { revalidatePath } from "next/cache";
import { fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { TicketStatus } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
    const { user } = await getAuthOrRedirect();

    try {

        const ticket = await prisma.ticket.findUnique({
            where: {
                id
            }
        });

        if (!ticket || !isOwner(user, ticket)) {
            return toActionState("ERROR", "Not auhtorized");
        }

        await prisma.ticket.update({
            where: {
                id,
            },
            data: {
                status
            }
        });
    } catch (error) {
        return fromErrorToActionState(error);
    }

    revalidatePath(ticketsPath());

    return toActionState("SUCCESS", "Status updated");
}