import { signOut } from "@/features/auth/actions/sign-out";
import { User } from "@/generated/prisma/client"
import { SubmitButton } from "./form/submit-button";
import { LucideClock, LucideLogOut, LucideUser } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import { accountPasswordPath, accountProfilePath } from "@/path";

type AccountDropdownProps = {
    user: User;
}


const AccountDropdown = ({ user }: AccountDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar>
                    <AvatarFallback>
                        {user.username[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={accountProfilePath()}>
                        <LucideUser className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={accountPasswordPath()}>
                        <LucideClock className="mr-2 h-4 w-4" />
                        <span>Password</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <form action={signOut}>
                        <LucideLogOut className="mr-2 h-4 w-4" />
                        <button type="submit">Sign Out</button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export { AccountDropdown };