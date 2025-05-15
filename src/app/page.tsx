import Link from 'next/link';
import { Heading } from '@/components/heading';
import { ticketsPath } from '@/path';
import { Suspense } from 'react';
import { Ticketlist } from '@/features/ticket/components/ticket-list';
import { Spinner } from '@/components/spinner';
import { SearchParams } from '@/features/ticket/search-params';

type HomePageProps = {
    searchParams: Promise<SearchParams>
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title='All Tickets' description='Tickets by everyone at one place' />
      <Suspense fallback={<Spinner />}>
        <Ticketlist searchParams={await searchParams} />
      </Suspense>
    </div>
  );
};

export default HomePage;
