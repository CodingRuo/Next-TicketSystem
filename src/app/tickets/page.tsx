import { Heading } from '@/components/heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { intitialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { ticketPath } from '@/path';
import { LucideCheckCircle, LucideFileText, LucidePencil } from 'lucide-react';
import Link from 'next/link';

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  DONE: <LucideCheckCircle />,
  IN_PROGRESS: <LucidePencil />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
        <Heading title='Tickets' description='All your ticktes at one place' />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {intitialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket}/>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
