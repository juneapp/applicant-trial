import { useState, useEffect, useRef } from "react";
import { getProjects } from "../services/";
import { ProjectCard } from "../components";
import "./DashboardPage.css";
import { Project } from "../types";
import { Icons } from "../icons";

const mockProjects = [
    {
        id: 1234,
        title: "Lorem",
        key: "key1",
        groups: [],
        document_id: "1234",
    },
    {
        id: 5678,
        title: "Ipsum",
        key: "key2",
        groups: [],
        document_id: "5678",
    },
    {
        id: 9012,
        title: "Dolor",
        key: "key3",
        groups: [],
        document_id: "9012",
    },
];

export function DashboardPage() {
    const [projects, setProjects] = useState<Project[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const projectErrorRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        projectErrorRef.current?.focus();
    }, [error]);

    useEffect(() => {
        let isMounted = true;

        const fetchProjects = async () => {
            try {
                //? Show loading skeleton
                await new Promise((resolve) => setTimeout(resolve, 10000));

                const projects: Project[] = await getProjects();

                if (isMounted) {
                    setProjects([...projects, ...mockProjects]);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchProjects();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="dashboard-page">
            <h1 className="dashboard-page__title">
                Pro<span className="text-color-main">j</span>ects Overview
            </h1>
            {error && (
                <div
                    className="dashboard-page__error-box"
                    ref={projectErrorRef}
                    tabIndex={-1}
                >
                    <p className="">{error}</p>
                </div>
            )}
            <section className="project-grid">
                {isLoading ? (
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                ) : (
                    <>
                        <article className="dashboard-page__new-project-card">
                            <Icons.PlusSign className="dashboard-page__new-project-card--icon" />
                        </article>
                        {projects.map((project: Project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </>
                )}
            </section>
        </div>
    );
}

const SkeletonCard = () => {
    return <article className="dashboard-page__card-skeleton"></article>;
};
