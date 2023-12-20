import "./styles/preflight.css";
import "./styles/index.css";

import Providers from "./providers";
import { RootLayout } from "./layouts";
import { LandingPage, DashboardPage } from "./pages";
import { useUser } from "./hooks";

const Content = () => {
    const { user } = useUser();

    return (
        <RootLayout>{!user ? <LandingPage /> : <DashboardPage />}</RootLayout>
    );
};

const App = () => {
    return (
        <Providers>
            <Content />
        </Providers>
    );
};

export default App;
