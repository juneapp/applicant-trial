import { Project } from "../types";
import "./ProjectCard.css";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="project-card">
            <p className="project-card__id">ID: {project.id}</p>
            <h2 className="project-card__title">{project.title}</h2>
        </article>
    );
}
