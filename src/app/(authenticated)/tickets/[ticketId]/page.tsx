import { notFound } from "next/navigation";
import { BreadCrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { homePath } from "@/path";
import { getComments } from "@/features/comment/queries/get-comments";
import { Comments } from "@/features/comment/components/comments";

type TicketsPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketsPageProps) => {
    const { ticketId } = await params;
    const ticketPromise = getTicket(ticketId);
    const commentsPromise = getComments(ticketId);

    const [ticket, paginatedComments] = await Promise.all([
        ticketPromise,
        commentsPromise
    ])

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
                <TicketItem ticket={ticket} isDetail comments={<Comments ticketId={ticket.id} paginatedComments={paginatedComments} />}/>
            </div>
        </div>
    )
};

export default TicketPage;