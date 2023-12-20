export function getTokenFromCookie(): string | null {
    return (
        document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1] || null
    );
}
