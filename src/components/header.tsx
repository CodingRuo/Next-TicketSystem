import { homePath, ticketsPath } from "@/path"
import { LucideKanban } from "lucide-react"
import { buttonVariants } from "./ui/button"
import Link from "next/link"

const Header = () => {
    return (
        <nav
          className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          "
        >
          <div>
              <Link href={homePath()} className={buttonVariants({ variant: 'default' })}>
                <LucideKanban />
                <h1 className="text-lg font-semibold">TicketBounty</h1>
              </Link>
          </div>
          <div>
            <Link href={ticketsPath()} className={buttonVariants({ variant: 'outline' })}>
              Tickets
            </Link>
          </div>
        </nav>
    )
}

export { Header }