import { Project } from "../../types/Types";
import { HOME_PAGE_TITLE } from "../../types/constants";
import Header from "../Header/Header";
import ProjectsList from "../Project/ProjectsList/ProjectsList";
import { ProjectsListItemType } from "../Project/ProjectsList/ProjectsListItem/ProjectsListItem";

const projects: Project[] = [
  {
    title: "project1",
    date: "09/28/2002",
    fullDescription: "project 1 full description goes here and etc",
    number: 1,
    summary: "p1 summary",
    githubLink: "https://www.google.com/",
  },
  {
    title: "project2",
    date: "09/28/2002",
    fullDescription: "project 2 full description goes here and etc",
    number: 2,
    summary: "p2 summary",
    githubLink: "",
  },
  {
    title: "project3",
    date: "09/28/2002",
    fullDescription: "project 3 full description goes here and etc",
    number: 3,
    summary: "p3 summary",
    githubLink: "",
  },
];

const projectListItems = projects.map((project) => {
  return {
    title: project.title,
    date: project.date,
    summary: project.summary,
    number: project.number,
  } as ProjectsListItemType;
});

const HomePage = () => {
  return (
    <div>
      <Header pageName={HOME_PAGE_TITLE} isAdmin={true}></Header>
      <ProjectsList
        projectList={projectListItems}
        sortBy={"name"}
      ></ProjectsList>
    </div>
  );
};

export default HomePage;
