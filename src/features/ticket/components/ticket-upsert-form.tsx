"use client";

import { useActionState } from "react";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ticket } from "@/generated"
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
    ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(
        upsertTicket.bind(null, ticket?.id),
        EMPTY_ACTION_STATE
    );

    return (
        <Form action={action} actionState={actionState}>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={
                (actionState.payload?.get("title") as string) ?? ticket?.title
            } />
            <span className="text-xs text-red-500">
                {actionState.fieldErrors.title?.[0]}
            </span>

            <Label htmlFor="content">Content</Label>
            <Input id="content" name="content" type="text" defaultValue={
                (actionState.payload?.get("content") as string) ?? ticket?.content
            } />
            <span className="text-xs text-red-500">
                {actionState.fieldErrors.content?.[0]}
            </span>

            <SubmitButton label={ticket ? "Edit" : "Create"} />
        </Form>
    );
}

export { TicketUpsertForm }