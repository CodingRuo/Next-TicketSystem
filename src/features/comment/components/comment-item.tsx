"use client";

import { format } from 'date-fns'
import { Card } from "@/components/ui/card";
import { CommentWithMetadata } from "../types"

type CommentItemProps = {
    comment: CommentWithMetadata;
    buttons: React.ReactNode[];
}

const CommentItem = ({ comment, buttons }: CommentItemProps) => {
    return (
        <div className="flex gap-x-2 ml-8">
            <Card className="p-4 flex-1 flex flex-col gap-y-1">
                <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground">{comment.isOwner ? "You" : comment.user?.username ?? "Deleted User"}</p>
                    <p className="text-sm text-muted-foreground">{format(comment.createdAt, "yyy-MM-dd, HH:mm")}</p>
                    <p className="whitespace-pre-line">{comment.content}</p>
                </div>
            </Card>
            <div className="flex flex-col gap-y-1">{buttons}</div>
        </div>
    );
}

export { CommentItem };