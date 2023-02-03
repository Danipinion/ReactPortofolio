import React from "react";
import AboutMe from "./About/AboutMe";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";

function About() {
  return (
    <>
      <div className="border-2 p-5 px-16 text-white border-cyan-500 w-full mx-8 mt-5 rounded-lg">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default About;
