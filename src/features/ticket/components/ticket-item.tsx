import { Card, CardContent, CardHeader, CardTitle }  from "@/components/ui/card";
import { TICKET_ICONS }                              from "../constants";
import Link                                          from "next/link";
import { ticketPath }                                from "@/path";
import { Button }                                    from "@/components/ui/button";
import { LucideArrowUpRightFromSquare, LucideTrash } from "lucide-react";
import clsx                                          from "clsx";
import { Ticket }                                    from "@/generated";
import { prisma } from "@/lib/prisma";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const handleDeleteTicket = async () => {
        await deleteTicket(ticket.id);
    }

    const detailButton = (
        <Button variant={"outline"} size={"icon"} asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideArrowUpRightFromSquare className="h-4 w-4"/>
            </Link>
        </Button>
    );

    const deleteButton = (
        <Button variant={"outline"} size={"icon"} onClick={handleDeleteTicket}>
            <LucideTrash className="h-4 w-4" />
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
            </Card>
            {isDetail ? deleteButton : detailButton}
        </div>
    )
}

export { TicketItem };