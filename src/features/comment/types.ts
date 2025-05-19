import { Prisma } from "@/generated/prisma/client";

export type CommentWithMetadata = Prisma.CommentGetPayload<{
    include: {
        user: {
            select: { username: true }
        }
    }
}> & { isOwner: boolean };



export type PaginatedData<T> = {
    list: T[];
    metadata : { count: number; hasNextPage: boolean; cursor?: string }
}