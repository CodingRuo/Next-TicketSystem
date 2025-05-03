import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { Ticketlist } from '@/features/ticket/components/ticket-list';
import { Suspense } from 'react';

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="All your ticktes at one place"
      />
        <Suspense fallback={<Spinner />}>
          <Ticketlist />
        </Suspense>
    </div>
  );
};

export default TicketsPage;
