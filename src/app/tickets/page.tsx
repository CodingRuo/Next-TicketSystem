import { Heading } from '@/components/heading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { intitialTickets } from '@/data';
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
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
                <CardTitle className='flex gap-x-2'>
                    <span>{TICKET_ICONS[ticket.status]}</span>
                    <span className="text-lg font-semibold truncate">{ticket.title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3 whitespace-break-spaces">{ticket.content}</p>
            </CardContent>
            <CardFooter>
                <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
