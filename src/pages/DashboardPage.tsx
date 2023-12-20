import { useState, useEffect } from "react";
import { getProjects } from "../services/";

export function DashboardPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchProjects = async () => {
            try {
                const projects = await getProjects();
                console.log(projects);
                if (isMounted) {
                    setProjects(projects);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h3>
                <pre>{JSON.stringify(projects, null, 2)}</pre>
                {/* {projects.map((p: Project, idx) => (
                    <div key={idx}>{p.title}</div>
                ))} */}
            </h3>
        </div>
    );
}
