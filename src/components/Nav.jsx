import React from "react";
import "./nav.css";
import { Link, resolvePath, useMatch } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="fixed bottom-2 left-2/4 bg-cyan-600 px-5 py-2 rounded-lg w-32 flex justify-between -translate-x-1/2 nav">
        <CustomLink to="/">
          <ion-icon name="person-outline"></ion-icon>
        </CustomLink>
        <CustomLink to="/contact">
          <ion-icon name="mail-open-outline"></ion-icon>
        </CustomLink>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = resolvePath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      to={to}
      {...props}
      className={
        isActive
          ? "text-xl text-white flex justify-center items-center transition-all duration-300 active"
          : "text-xl text-white flex justify-center items-center transition-all duration-300"
      }
    >
      {children}
    </Link>
  );
}
export default Nav;
