import React from "react";
import "./ProjectsListItem.css";
interface ProjectsListItemProps {
  project: ProjectsListItemType;
  link?: string;
}

const ProjectsListItem: React.FC<ProjectsListItemProps> = ({
  project,
  link,
}) => {
  return (
    <div className="container">
      <div className="title">{project.title}</div>
      <div className="text">{formatDate(project.date)}</div>
      <div className="text">{project.summary}</div>
      {link && <div className="link">{link}</div>}
    </div>
  );
};

// TODO: move into string functions
export const formatDate = (dateString: string) => {
  return "Date: " + dateString;
};

export type ProjectsListItemType = {
  title: string;
  date: string;
  number: number;
  summary: string;
};

export default ProjectsListItem;
