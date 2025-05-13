"use client";

import { useActionState, useRef } from "react";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ticket } from "@/generated"
import { fromCent } from "@/utils/currency";
import { upsertTicket } from "../actions/upsert-ticket";
import { DatePicker, ImperativeHandleFromDatePicker } from "@/components/date-picker";

type TicketUpsertFormProps = {
    ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(
        upsertTicket.bind(null, ticket?.id),
        EMPTY_ACTION_STATE
    );

    const datePickerImperativeHandleRef = useRef<ImperativeHandleFromDatePicker>(null);

    const handleSuccess = () => {
        datePickerImperativeHandleRef.current?.reset();
    }

    return (
        <Form action={action} actionState={actionState} onSuccess={handleSuccess}>
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

            <div className="flex gap-x-2 mb-1">
                <div className="w-1/2">
                    <Label htmlFor="deadline">Deadline</Label>
                    {/* <Input id="deadline" name="deadline" type="date" defaultValue={(actionState.payload?.get("deadline") as string) ?? ticket?.deadline} />*/}
                    <DatePicker
                        id="deadline"
                        name="deadline"
                        defaultValue={(actionState.payload?.get("deadline") as string) ?? ticket?.deadline}
                        imperativeHandleRef={datePickerImperativeHandleRef}
                    />
                    <FieldError actionState={actionState} name="deadline" />
                </div>
                <div className="w-1/2">
                    <Label htmlFor="bounty">Bounty ($)</Label>
                    <Input id="bounty" name="bounty" type="number" step={".01"} defaultValue={(actionState.payload?.get("bounty") as string) ?? (ticket?.bounty ? fromCent(ticket?.bounty) : "")} />
                    <FieldError actionState={actionState} name="bounty" />
                </div>
            </div>

            <SubmitButton label={ticket ? "Edit" : "Create"} />
        </Form>
    );
}

export { TicketUpsertForm }