import type { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="de">
            <body>
                <header>
                    [header]
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [footer]
                </footer>
            </body>
        </html>
    )
}