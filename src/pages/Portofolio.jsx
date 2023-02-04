import React from "react";

function Portofolio() {
  return (
    <div className="sm:p-5 pr-2 mb-20 sm:mb-0">
      <h1 className="text-white font-bold text-3xl mb-4 text-center">
        My Portofolio
      </h1>
      <div className="cards flex sm:gap-10 gap-5  justify-center flex-wrap h-[70vh] overflow-y-scroll">
        <div className="card group w-80 relative">
          <img src={require("../assets/img/1.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Happy New Year</p>
            <p className="text">Html, Css, Javascript</p>
          </div>
        </div>
        <div className="card group w-80 relative">
          <img src={require("../assets/img/2.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Progate Camp</p>
            <p className="text">Html, Css</p>
          </div>
        </div>
        <div className="card group w-80 relative">
          <img src={require("../assets/img/3.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Personal Portofolio</p>
            <p className="text">Html, Css</p>
          </div>
        </div>
        <div className="card group w-80 relative">
          <img src={require("../assets/img/4.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Personal Portofolio React</p>
            <p className="text">React</p>
          </div>
        </div>
        <div className="card group w-80 relative">
          <img src={require("../assets/img/5.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Order Food</p>
            <p className="text">Html, Css</p>
          </div>
        </div>
        <div className="card group w-80 relative">
          <img src={require("../assets/img/6.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Mini Game Pertambahan</p>
            <p className="text">Html, Css, Javascript</p>
          </div>
        </div>
        <div className="card group w-80 relative">
          <img src={require("../assets/img/7.png")} alt="" className="" />
          <div className="hidden group-hover:inline-block absolute bottom-0 pl-3 pb-8 pt-5 bg-gradient-to-t from-cyan-500  w-full">
            <p className="text-lg">Portofolio Freecodecamp</p>
            <p className="text">Html, Css</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
