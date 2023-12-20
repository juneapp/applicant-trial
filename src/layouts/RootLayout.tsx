import { Header } from "../components";
import "./RootLayout.css";

export function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="root-layout">
            <Header />
            {children}
        </main>
    );
}
