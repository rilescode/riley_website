import { useState } from "react";
import { Project } from "../../types/Types";
import "./Admin.css";

function createDBProject(project: Project) {
  //create a new project in the db table projects that stores all this
}

const Admin = () => {
  const [project, setProject] = useState<Project>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    fullDescription: "",
    number: 0,
    summary: "",
    githubLink: "",
    image: null, // Initialize image as null
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files && event.target.files[0];
    setProject((prevProject) => ({
      ...prevProject,
      image: imageFile,
    }));
  };

  const createProject = () => {
    console.log("Project created:", project);
    //make this create a new project
    //make this create a new project page
  };

  return (
    <div className="container">
      <div className="title">Create a New Project</div>
      <div className="form-group">
        <label className="text">Project Name</label>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Enter Project Name"
          value={project.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="text">Project Date</label>
        <input
          className="input"
          type="date"
          name="date"
          value={project.date}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label className="text">Project Description</label>
        <input
          className="long-input"
          type="text"
          name="fullDescription"
          placeholder="Enter Project Description"
          value={project.fullDescription}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label className="text">Project Summary</label>
        <input
          type="text"
          name="summary"
          placeholder="Enter Project Summary"
          value={project.summary}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="text">Project GitHub Link</label>
        <input
          type="text"
          name="githubLink"
          placeholder="Enter GitHub Link"
          value={project.githubLink}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="text">Project Image</label>
        <input
          className="input"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <button className="create-button" onClick={createProject}>
        Create Project
      </button>
    </div>
  );
};

export default Admin;

// when this project gets added here, it should add to the project list
// and it should also create a new project page for this project

// TODO: fix styling to make it so that each input has a text title beforehand like project name
// make the description textbox larger with a limit of 1000 words and scrollable
// Each of these should be on its own line
// they should have pretty react styling

// at this point I will need to have something that actually creates the project in the database
