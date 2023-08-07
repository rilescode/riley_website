import "./App.css";
import AboutMe from "./Components/AboutMe.tsx/AboutMe";
import HomePage from "./Components/HomePage/HomePage";

// import About component
// import ContactUs component

const currentPageText = "Home Page";
let currentPage = 1;

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
      {currentPage === Page.Home && <HomePage />}
      {currentPage === Page.About && <AboutMe user={sampleUser}></AboutMe>}
    </>
  );
}

export default App;
