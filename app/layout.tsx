import type { ReactNode } from 'react';
import './global.css';
import NavBar from '@/app/components/NavBar';
import { exo2,orbitron } from '@/app/fonts';

type LayoutProps = {
    children: ReactNode;
};

export const metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer',
    },
    description: 'Only the best indie games, reviewed for you.'
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
            <body className="bg-orange-100 flex flex-col px-8 py-4 min-h-screen">
                <header>
                    <NavBar/>
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-slate-500 text-xs">
                    Game data and images  courtesy of{' '}
                    <a href="https://rawg.io/" target="_blank" 
                        className='text-orange-800 hover:underline'>
                        RAWG
                    </a>
                </footer>
            </body>
        </html>
    )
}