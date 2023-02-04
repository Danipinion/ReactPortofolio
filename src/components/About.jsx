import React from "react";
import AboutMe from "../pages/AboutMe";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Portofolio from "../pages/Portofolio";
import Resume from "../pages/Resume";

function About() {
  return (
    <>
      <div className="sm:border-2 border-0  text-white border-cyan-500 md:w-3/4 sm:mx-2 mt-5 rounded-lg relative">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default About;
