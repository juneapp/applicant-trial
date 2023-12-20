import { UserProvider } from "./contexts";

export default function Providers({ children }) {
    return <UserProvider>{children}</UserProvider>;
}
