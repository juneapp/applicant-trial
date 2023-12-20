import { useUser } from "../hooks";
import { logout } from "../services";
import { Button } from ".";
import "./Header.css";

export function Header() {
    const { user } = useUser();

    return (
        <header className="header">
            <img
                className="header__logo"
                src="/june_logo.webp"
                width={75}
                alt="Description of image"
            />
            <div className="header__user-info-and-btn">
                {user ? (
                    <div className="header__username">{user.username}</div>
                ) : null}
                {user ? (
                    <Button
                        role="secondary"
                        size="medium"
                        onClick={logout}
                        type="button"
                    >
                        Logout
                    </Button>
                ) : null}
            </div>
        </header>
    );
}
