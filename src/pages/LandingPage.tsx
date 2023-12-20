import { LoginForm } from "../components";
import "./LandingPage.css";

export function LandingPage() {
    return (
        <section className="landing-page">
            <div className="lading-page__title-container">
                <h1 className="landing-page__title">Welcome to</h1>{" "}
                <img
                    className="header__logo"
                    src="/june_logo.webp"
                    width={75}
                    alt="Description of image"
                />
            </div>
            <h3 className="landing-page__title--sub">Log in to get started</h3>
            <LoginForm />
        </section>
    );
}
