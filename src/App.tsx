import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import AboutMe from "./Components/AboutMe.tsx/AboutMe";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";

// import About component
// import ContactUs component

const currentPageText = "Home Page";
let currentPage = 3;

const sampleUser = {
  name: "Riley",
  email: "myEmail@gmail.com",
  phone: "123-456-7890",
  github: "https://github.com/rilescode",
  linkedin: "https://www.linkedin.com/in/riley-crahen-1a65b21a5/",
  resume: "riley_resume.pdf",
  summary: "here is a long summary aboutme",
};

export enum Page {
  Home,
  About,
  Projects,
  Admin,
}

function App() {
  return (
    <Router>
      {/* Add a navigation menu with links */}
      <Header isAdmin={true}></Header>

      {/* Define the routes */}
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<AboutMe user={sampleUser} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
