import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-tickets";
import { ticketsPath } from "@/path";
import Link from "next/link";
import { notFound } from "next/navigation";

type TicketsPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketsPageProps) => {
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound()
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail/>
        </div>
    )
};

export default TicketPage;