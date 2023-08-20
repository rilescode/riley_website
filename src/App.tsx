import "./App.css";
import AboutMe from "./Components/AboutMe.tsx/AboutMe";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/HomePage/HomePage";

// import About component
// import ContactUs component

const currentPageText = "Home Page";
let currentPage = 0;

const sampleUser = {
  name: "Riley",
  email: "myEmail@gmail.com",
  phone: "123-456-7890",
  github: "https://github.com/rilescode",
  linkedin: "https://www.linkedin.com/in/riley-crahen-1a65b21a5/",
  resume: "riley_resume.pdf",
  summary: "here is a long summary aboutme",
};

enum Page {
  Home,
  About,
  Projects,
  Admin,
}

function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Projects />} />
      </Routes> */}
      {/* This is the current */}
      {currentPage === Page.Home && <HomePage />}
      {currentPage === Page.About && <AboutMe user={sampleUser}></AboutMe>}
      {currentPage === Page.Admin && <Admin></Admin>}

      {}
    </>
  );
}

export default App;
