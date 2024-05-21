import React from "react";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Demo from "./Components/Demo";
import Skd from "./Components/Skd";

function App() {
  return (
    <div>
      {/* <Demo /> */}
      <Navbar1 />
      <Navbar2 />
      <hr></hr>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Skd />
    </div>
  );
}

export default App;
