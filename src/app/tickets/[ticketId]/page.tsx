import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { intitialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/path";
import Link from "next/link";

type TicketsPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketsPageProps) => {
    const { ticketId } = await params;
    const ticket = intitialTickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
        return (
            <Placeholder 
                label="Ticket not found"
                button={
                    <Button asChild variant="outline">
                        <Link href={ticketsPath()}>Go to Ticktes</Link>
                    </Button>
                }
            />
        );
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail/>
        </div>
    )
};

export default TicketPage;