import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ProjectsList from "./Components/ProjectsList/ProjectsList";
import { ProjectsListItemType } from "./Components/ProjectsList/ProjectsListItem/ProjectsListItem";

// import About component
// import ContactUs component

const myProjectList: ProjectsListItemType[] = [
  {
    title: "project1",
    date: "09/28/2002",
    content: "project 1 description",
    number: 1,
  },
  {
    title: "project2",
    date: "09/28/2002",
    content: "project 2 description",
    number: 2,
  },
  {
    title: "project3",
    date: "09/28/2002",
    content: "project 3 description",
    number: 3,
  },
];

function App() {
  return (
    <div>
      <HomePage></HomePage>
      <ProjectsList projectList={myProjectList} sortBy={"name"}></ProjectsList>
    </div>
  );
}

export default App;
