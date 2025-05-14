import { notFound } from "next/navigation";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { BreadCrumbs } from "@/components/breadcrumbs";
import { homePath } from "@/path";
import { Separator } from "@/components/ui/separator";

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
        <div className="flex flex-1 flex-col gap-y-8">
            <BreadCrumbs
                breadcrumbs={[
                    { title: "Tickets", href: homePath() },
                    { title: ticket.title },
                ]}
            />
            <Separator />
            <div className="flex justify-center animate-fade-from-top">
                <TicketItem ticket={ticket} isDetail />
            </div>
        </div>
    )
};

export default TicketPage;