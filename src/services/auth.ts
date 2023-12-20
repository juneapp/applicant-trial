import { API_BASE_URL } from "../constants";

export async function loginWithCredentials(username: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login_check`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    const data = await response.json();
    const token = data.token;

    // document.cookie = `token=${token}; max-age=${60}`;
    document.cookie = `token=${token}; max-age=${60 * 60 * 24 * 7}`;
    return data.user;
}

export function logout() {
    document.cookie = "token=; max-age=0";
    window.location.reload();
}
