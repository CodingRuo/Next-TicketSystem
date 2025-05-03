import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { intitialTickets } from "@/data";
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

    return <div>
        <h2 className="tex-lg">{ticket.title}</h2>
        <p className="text-sm">{ticket.content}</p>
    </div>
};

export default TicketPage;