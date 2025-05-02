import { intitialTickets } from "@/data";
import { ticketPath } from "@/path";
import Link from "next/link";

const TicketsPage = () => {
    return (
        <div>
            {intitialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2 className="text-lg">{ticket.title}</h2>
                    <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
                </div>
            ))}
        </div>
    )
}

export default TicketsPage;