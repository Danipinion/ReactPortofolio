import React from "react";
import "./nav.css";
import { Link, resolvePath, useMatch } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="fixed bottom-0  left-2/4 bg-cyan-600 px-5 py-2 sm:rounded-t-lg w-full flex  justify-evenly -translate-x-1/2 ">
        <CustomLink to="/" ident="Home" icon={"person-outline"} />
        <CustomLink to="/portofolio" ident="Porto" icon={"folder-outline"} />
        <CustomLink to="/resume" ident="Resume" icon={"newspaper-outline"} />
        <CustomLink to="/contact" ident="Contact" icon={"mail-open-outline"} />
        <CustomLink
          to="https://danipinion-blog.vercel.app"
          ident="Blog"
          icon={"book-outline"}
        />
      </div>
    </>
  );
}

function CustomLink({ to, ident, icon, ...props }) {
  const resolvedPath = resolvePath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      to={to}
      {...props}
      className={
        isActive
          ? "text-md text-white flex justify-center items-center transition-all duration-300 active w-16 h-w-16"
          : "text-md text-white flex justify-center items-center transition-all duration-300 flex-col sm:flex-row"
      }
    >
      <div className={isActive ? "hidden" : "pl-3 -translate-x-1"}>
        <ion-icon name={icon}></ion-icon>
      </div>
      <p
        className={isActive ? "transition-all text-sm" : "pl-3 -translate-x-1"}
      >
        {ident}
      </p>
    </Link>
  );
}
export default Nav;
