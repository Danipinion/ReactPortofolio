import React from "react";
import "./nav.css";
import { Link, resolvePath, useMatch } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="fixed bottom-0  left-2/4 bg-cyan-600 px-5 py-2 sm:rounded-t-lg w-full flex  justify-evenly -translate-x-1/2">
        <CustomLink to="/" ident="Home">
          <ion-icon name="person-outline"></ion-icon>
        </CustomLink>
        <CustomLink to="/portofolio" ident="Porto">
          <ion-icon name="folder-outline"></ion-icon>
        </CustomLink>
        <CustomLink to="/resume" ident="Resume">
          <ion-icon name="newspaper-outline"></ion-icon>
        </CustomLink>
        <CustomLink to="/contact" ident="Contact">
          <ion-icon name="mail-open-outline"></ion-icon>
        </CustomLink>
        <CustomLink to="https://danipinion.vercel.app" ident="Blog">
          <ion-icon name="book-outline"></ion-icon>
        </CustomLink>
      </div>
    </>
  );
}

function CustomLink({ to, ident, children, ...props }) {
  const resolvedPath = resolvePath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      to={to}
      {...props}
      className={
        isActive
          ? "text-md text-white flex justify-center items-center transition-all duration-300 active w-11 h-11"
          : "text-md text-white flex justify-center items-center transition-all duration-300 flex-col sm:flex-row"
      }
    >
      {children}
      <p
        className={isActive ? "transition-all text-sm" : "pl-3 -translate-x-1"}
      >
        {ident}
      </p>
    </Link>
  );
}
export default Nav;
