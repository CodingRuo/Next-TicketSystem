import { intitialTickets } from "@/data";

type TicketsPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketsPageProps) => {
    const { ticketId } = await params;
    const ticket = intitialTickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
        return <div>Ticket not found!</div>;
    }

    return <div>
        <h2 className="tex-lg">{ticket.title}</h2>
        <p className="text-sm">{ticket.content}</p>
    </div>
};

export default TicketPage;