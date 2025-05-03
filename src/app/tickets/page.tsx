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
      <div>
        <h2 className="text-3l font-bold tracking-tight">Tickets</h2>
        <p className="text-sm text-muted-foreground">
          All your ticktes at one place
        </p>
      </div>
      <Separator />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {intitialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
            <CardHeader>
                <CardTitle>
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
