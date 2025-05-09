import clsx                                          from "clsx";
import { LucideArrowUpRightFromSquare, LucidePencil, LucideTrash } from "lucide-react";
import Link                                          from "next/link";
import { Button }                                    from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle }  from "@/components/ui/card";
import { Ticket }                                    from "@/generated";
import { ticketEditPath, ticketPath }                                from "@/path";
import { toCurrencyFromCent } from "@/utils/currency";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS }                              from "../constants";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = async ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Button variant={"outline"} size={"icon"} asChild>
            <Link prefetch href={ticketPath(ticket.id)}>
                <LucideArrowUpRightFromSquare className="h-4 w-4"/>
            </Link>
        </Button>
    );

    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button variant={"outline"} size={"icon"}>
                <LucideTrash className="h-4 w-4" />
            </Button>
        </form>
    );

    const editButton = (
        <Button variant={"outline"} size={"icon"} asChild>
            <Link prefetch href={ticketEditPath(ticket.id)}>
                <LucidePencil className="h-4 w-4" />
            </Link>
        </Button>
    )
    return (
        <div 
            className={clsx("w-full flex gap-x-1", {
                "max-w-[580px]": isDetail,
                "max-w-[420px]": !isDetail,
            })}
        >
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span 
                        className={clsx("whitespace-break-spaces", {
                            "line-clamp-3": !isDetail
                        })}
                    >{ticket.content}</span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">{ticket.deadline}</p>
                    <p className="text-sm text-muted-foreground">{toCurrencyFromCent(ticket.bounty)}</p>
                </CardFooter>
            </Card>
            {isDetail ? 
                <>
                    {editButton}
                    {deleteButton}
                </>
                :
                <>
                    {detailButton}
                    {editButton}
                </>
            }
        </div>
    )
}

export { TicketItem };