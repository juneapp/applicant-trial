import { useUser } from "../hooks";
import { logout } from "../services";

export function Header() {
    const { user } = useUser();
    //TODO styling
    return (
        <header>
            <img src="/june_logo.webp" width={50} alt="Description of image" />
            <div>
                {user ? <div className="">{user.username}</div> : null}
                {user ? <button onClick={logout}>Logout</button> : null}
            </div>
        </header>
    );
}
