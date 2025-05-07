"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ticket } from "@/generated"
import { upsertTicket } from "../actions/upsert-ticket";
import { SubmitButton } from "@/components/form/submit-button";
import { useActionState } from "react";

type TicketUpsertFormProps = {
    ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(
        upsertTicket.bind(null, ticket?.id),
        { message: "" }
    );

    return (
        <form action={action} className="flex flex-col gap-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={
                (actionState.payload?.get("title") as string) ?? ticket?.title
            } />

            <Label htmlFor="content">Content</Label>
            <Input id="content" name="content" type="text" defaultValue={
                (actionState.payload?.get("content") as string) ?? ticket?.content
            } />

            <SubmitButton label={ticket ? "Edit" : "Create"} />

            {actionState.message}
        </form>
    );
}

export { TicketUpsertForm }