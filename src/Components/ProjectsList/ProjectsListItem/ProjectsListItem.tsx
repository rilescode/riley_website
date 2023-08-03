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
      <div className="text">{project.content}</div>
      {link && <div className="link">{link}</div>}
    </div>
  );
};

function titleCase(str: string) {
  // return str.charAt(0).toLocaleUpperCase() + str.substr(1).toLowerCase();
}

function formatDate(dateString: string) {
  return "Date: " + dateString;
}

export type ProjectsListItemType = {
  title: string;
  date: string;
  content: string;
  number: number;
};

export default ProjectsListItem;
