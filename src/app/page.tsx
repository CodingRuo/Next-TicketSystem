import Link from 'next/link';
import { Heading } from '@/components/heading';
import { ticketsPath } from '@/path';
import { Suspense } from 'react';
import { Ticketlist } from '@/features/ticket/components/ticket-list';
import { Spinner } from '@/components/spinner';

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title='All Tickets' description='Tickets by everyone at one place' />
      <Suspense fallback={<Spinner />}>
        <Ticketlist />
      </Suspense>
    </div>
  );
};

export default HomePage;
