import React from "react";
import AboutMe from "./About/AboutMe";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";

function About() {
  return (
    <>
      <div className="sm:border border-0 -2 p-5 sm:px-16 px-9 text-white border-cyan-500 w-full sm:mx-8 mt-5 rounded-lg">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default About;
