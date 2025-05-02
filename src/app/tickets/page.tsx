import { intitialTickets } from '@/data';
import { ticketPath } from '@/path';
import Link from 'next/link';

const TICKET_ICONS = {
  OPEN: 'O',
  DONE: 'X',
  IN_PROGRESS: '>',
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
      <div className="flex-1 flex flex-col items-center pag-y-4">
        {intitialTickets.map((ticket) => (
          <div key={ticket.id} className='w-full max-w-[420px] p-4 border border-slate-100 rounded'>
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
            <p className="text-sm text-slate-400 truncate">{ticket.content}</p>
            <Link
              href={ticketPath(ticket.id)}
              className="text-sm underline"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
