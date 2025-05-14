"use client";

import { LucideKanban, LucideLogOut } from "lucide-react"
import Link from "next/link"
import { homePath, signInPath, signUpPath, ticketsPath } from "@/path"
import { ThemeSwitcher } from "./theme/theme-switcher"
import { buttonVariants } from "./ui/button"
import { SubmitButton } from "./form/submit-button"
import { signOut } from "@/features/auth/actions/sign-out"
import { getAuth } from "@/features/auth/queries/get-auth"
import { User as AuthUser } from 'lucia'
import { useEffect, useState } from "react";

const Header = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            const { user } = await getAuth();
            setUser(user);
        }

        fetchUser();
    }, []);

    const navItems = user ? (
        <>
            <Link href={ticketsPath()} className={buttonVariants({ variant: "outline" })}>Tickets</Link>
            <form action={signOut}>
                <SubmitButton label="Sign Out" icon={<LucideLogOut />} />
            </form>
        </>
    ) : (
        <>
            <Link href={signUpPath()} className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
            <Link href={signInPath()} className={buttonVariants({ variant: "default" })}>Sign In</Link>
        </>
    );


    return (
        <nav
            className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          "
        >
            <div className="flex items-center gap-x-2">
                <Link href={homePath()} className={buttonVariants({ variant: 'default' })}>
                    <LucideKanban />
                    <h1 className="text-lg font-semibold">TicketBounty</h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-2">
                <ThemeSwitcher />
                {navItems}
            </div>
        </nav>
    )
}

export { Header }