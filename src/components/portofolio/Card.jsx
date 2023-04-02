import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, text, link, tech }) {
  return (
    <div className="card group w-80 relative">
      <Link to={link}>
        <img src={image} alt={text} className="group-hover:blur-sm" />
        <div className=" opacity-0 group-hover:opacity-100 absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full duration-1000 ">
          <p className="text-lg">{text}</p>
          <p className="text">{tech}</p>
          <div className="group-hover:text-white group-hover:underline font-bold rounded-sm flex items-center ease-in group">
            <p className="peer">Site Page</p>
            <p className="opacity-0 group-hover:opacity-100 group-hover:translate-x-40 group-hover:text-7xl transition-all duration-500  group-hover:text-white">
              <ion-icon name="eye-outline"></ion-icon>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
