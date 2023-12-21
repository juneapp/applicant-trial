import { useState, useEffect } from "react";
import { getProjects } from "../services/";
import { ProjectCard } from "../components";
import "./DashboardPage.css";
import { Project } from "../types";
import { Icons } from "../icons";

export function DashboardPage() {
    const [projects, setProjects] = useState<Project[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;

        const fetchProjects = async () => {
            try {
                //? Show loading skeleton
                await new Promise((resolve) => setTimeout(resolve, 10000));

                const projects = (await getProjects()) as Project[];

                if (isMounted) {
                    setProjects(projects);
                    setIsLoading(false);
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
        <div className="dashboard-page">
            <h1 className="dashboard-page__title">
                Pro<span className="text-color-main">j</span>ects Overview
            </h1>
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
