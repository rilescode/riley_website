import React from "react";
import { Project } from "../../../types/Types";
import { formatDate } from "../ProjectsList/ProjectsListItem/ProjectsListItem";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div>
      <span className="header">Project Page</span>
      <div className="title">{project.title}</div>
      <div className="text">{formatDate(project.date)}</div>
      <div className="link">
        {project.githubLink && formatLink(project.githubLink)}
      </div>
      <div className="text">{project.fullDescription}</div>
    </div>
  );
};

export const formatLink = (link: string) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {link}
    </a>
  );
};

export default ProjectPage;
