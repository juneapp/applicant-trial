import { ButtonHTMLAttributes } from "react";
import "./Button.css";

export function Button({
    size,
    role,
    children,
    onClick,
    isLoading = false,
    ...rest
}: {
    size: "small" | "medium" | "large" | "fill";
    role: "primary" | "secondary" | "danger";
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`button button--${size} button--${role}`}
            onClick={onClick}
            {...rest}
        >
            {isLoading ? <LoadingIndicator /> : children}
        </button>
    );
}

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="loading-indicator__spinner"></div>
        </div>
    );
};
