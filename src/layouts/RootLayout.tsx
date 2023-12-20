import { Header } from "../components";

export function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="">
            <Header />
            {children}
        </main>
    );
}
