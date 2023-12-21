import { API_BASE_URL } from "../constants";
import type { Project } from "../types";
import { getTokenFromCookie } from "../utils";

export async function getProjects(): Promise<Project[]> {
    const token = getTokenFromCookie();

    if (!token) {
        window.location.reload();
    }

    const response = await fetch(`${API_BASE_URL}/v2/project`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const data = await response.json();
    return data.data as Project[];
}
