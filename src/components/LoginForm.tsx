import { useState, useRef, useEffect } from "react";
import { loginWithCredentials } from "../services";
import { useUser } from "../hooks";
import "./LoginForm.css";
import { Button } from ".";

export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [formError, setFormError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const formErrorRef = useRef<HTMLDivElement>(null);
    const errorSummaryRef = useRef<HTMLDivElement>(null);

    const { addUser } = useUser();

    useEffect(() => {
        userNameInputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (formError) {
            formErrorRef.current?.focus();
        }
    }, [formError]);

    useEffect(() => {
        if (usernameError || passwordError) {
            errorSummaryRef.current?.focus();
        }
    }, [usernameError, passwordError]);

    useEffect(() => {
        setFormError("");
    }, [username, password]);

    const validateForm = () => {
        let isValid = true;
        if (username.trim() === "") {
            setUsernameError("Username is required");

            isValid = false;
        } else if (username.trim().length < 5) {
            setUsernameError("Username needs 5+ characters");
            isValid = false;
        } else {
            setUsernameError("");
        }

        if (password.trim() === "") {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.trim().length < 5) {
            setUsernameError("Password needs 5+ characters");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        //? show the spinner
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (validateForm()) {
            try {
                const userData = await loginWithCredentials(username, password);
                addUser(userData);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.error("Login failed:", err);
                    setFormError("Unable to log in");
                } else console.error(err);
            }
        }
        setIsLoading(false);
    };

    //TODO style error messages
    return (
        <form onSubmit={handleSubmit} className="login-form">
            {(usernameError || passwordError) && (
                <div
                    className="login-form__error-box"
                    ref={errorSummaryRef}
                    tabIndex={-1}
                >
                    {usernameError && <p id="usernameError">{usernameError}</p>}
                    {passwordError && <p id="passwordError">{passwordError}</p>}
                </div>
            )}
            <div className="login-form__input-container">
                <label htmlFor="username" className="login-form__input-label">
                    Username
                </label>
                <input
                    id="username"
                    ref={userNameInputRef}
                    className="login-form__input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    // min={8}
                    aria-describedby="usernameError"
                />
            </div>
            <div className="login-form__input-container">
                <label htmlFor="password" className="login-form__input-label">
                    Password
                </label>
                <input
                    id="password"
                    className="login-form__input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    // min={8}
                    aria-describedby="passwordError"
                />
            </div>

            {formError && (
                <div
                    className="login-form__error-box"
                    ref={formErrorRef}
                    tabIndex={-1}
                >
                    <p>{formError}</p>
                </div>
            )}
            <Button
                isLoading={isLoading}
                size="medium"
                role="primary"
                type="submit"
                disabled={!username || !password}
            >
                Log in
            </Button>
        </form>
    );
}
