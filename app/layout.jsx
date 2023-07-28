export default function RootLayout({ children }) {
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