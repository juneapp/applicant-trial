import { useUser } from "../hooks";
import { logout } from "../services";

export function Header() {
    const { user } = useUser();
    //TODO styling
    return (
        <header>
            <h1>JUNE</h1>
            <div>
                {user ? <div className="">{user.username}</div> : null}
                {user ? <button onClick={logout}>Logout</button> : null}
            </div>
        </header>
    );
}
