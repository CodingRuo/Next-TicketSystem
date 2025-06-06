import { Header } from '@/app/_navigation/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Sidebar } from './_navigation/sidebar/sidebar';
import { ReactQueryProvider } from './_providers/react-query/react-query-provider';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'The Road to Next',
    description: 'My Road to Next application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NuqsAdapter>
                    <ThemeProvider>
                        <ReactQueryProvider>
                            <Header />
                            <div className='flex h-screen overflow-hidden border-collapse'>
                                <Sidebar />
                                <main
                                    className="
                            min-h-screen flex-1
                            overflow-y-auto overflow-x-hidden
                            py-24 px-8
                            bg-secondary/20
                            flex flex-col
                            "
                                >
                                    {children}
                                </main>
                            </div>
                            <Toaster expand />
                        </ReactQueryProvider>
                    </ThemeProvider>
                </NuqsAdapter>
            </body>
        </html>
    );
}
