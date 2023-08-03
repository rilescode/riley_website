import React from "react";
import ProjectsListItem, {
  ProjectsListItemType,
} from "./ProjectsListItem/ProjectsListItem";

interface ProjectsListProps {
  projectList: ProjectsListItemType[];
  sortBy: string;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projectList, sortBy }) => {
  const sortedProjectList = projectListSort(projectList, sortBy);
  const projectComponentsList = createProjectListComponents(sortedProjectList);
  return <div>{projectComponentsList}</div>;
};

function createProjectListComponents(projectList: ProjectsListItemType[]) {
  let projectComponentsList: JSX.Element[] = [];
  projectList.forEach((p) => {
    let projectComponent = <ProjectsListItem project={p}></ProjectsListItem>;
    projectComponentsList.push(projectComponent);
  });
  return projectComponentsList;
}

function projectListSort(projectList: ProjectsListItemType[], sortBy: string) {
  // TODO : implement correct sorting
  return projectList.sort((a, b) => a.number - b.number);
}

export default ProjectsList;
