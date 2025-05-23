import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { getAuth } from '@/features/auth/queries/get-auth';
import { Ticketlist } from '@/features/ticket/components/ticket-list';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';
import { searchParamsCache } from '@/features/ticket/search-params';

type TickesPageProps = {
    searchParams: Promise<SearchParams>;
};

const TicketsPage = async ({ searchParams }: TickesPageProps) => {
    const { user } = await getAuth();
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading
                title="My Tickets"
                description="All your tickets at one place"
            />
            <CardCompact
                title='Create a ticket'
                description='A new ticket will be created'
                className='w-full max-w-[420px] self-center'
                content={<TicketUpsertForm />}
            />
            <Suspense fallback={<Spinner />}>
                <Ticketlist userId={user?.id} searchParams={searchParamsCache.parse(await searchParams)}/>
            </Suspense>
        </div>
    );
};

export default TicketsPage;
