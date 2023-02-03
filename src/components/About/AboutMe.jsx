import React from "react";

function AboutMe() {
  return (
    <>
      <h1 className="text-white font-bold text-3xl mb-4 text-center">
        About Me
      </h1>
      <p className="text-center">
        Saya Mohammad Dani Taufiqurrohman sangat tertarik dalam bekerja di bidan
        pengembangan website. Disiplin dan mampu bekerja dengan bekerja sama
        maupun individu. Memiliki ketelian dan kemampuan komunikasi yang baik.
        Senang mempelajari hal baru.
      </p>
      <h1 className="font-semibold text-slate-400 text  text-xl mt-7">
        What I'm Doing
      </h1>
      <div className="doings flex flex-col sm:flex-row gap-2 mt-2">
        <div className="doing sm:w-2/4 w-full flex items-center bg-cyan-600 rounded-md p-5">
          <div className="img mr-2 text-4xl">
            <ion-icon name="code-slash"></ion-icon>
          </div>
          <div className="text">
            <p>WebDev</p>
            <p>
              Membangun website menggunakan bahasa javascript dan library
              ReactJs
            </p>
          </div>
        </div>
        <div className="doing sm:w-2/4 w-full flex items-center bg-cyan-600 rounded-md p-5">
          <div className="img mr-2 text-4xl">
            <ion-icon name="code-slash"></ion-icon>
          </div>
          <div className="text">
            <p>WebDev</p>
            <p>
              Membangun Rest Api menggunakan bahasa javacript dan library hapi
            </p>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-slate-400  text-xl mt-7">My Skills</h1>
      <div className="skills flex flex-wrap sm:flex-nowrap sm:gap-10 gap-1 sm:text-center mt-3 justify-center mb-20 sm:mb-0">
        <div className="skill text-center">
          <div className="img text-8xl hover:text-orange-400 peer transition-all duration-300">
            <ion-icon name="logo-html5"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            Advance
          </div>
        </div>
        <div className="skill text-center">
          <div className="img text-8xl hover:text-cyan-400 peer transition-all duration-300">
            <ion-icon name="logo-css3"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            Advance
          </div>
        </div>
        <div className="skill text-center">
          <div className="img text-8xl hover:text-yellow-400 peer transition-all duration-300">
            <ion-icon name="logo-javascript"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            Intermediate
          </div>
        </div>
        <div className="skill text-center">
          <div className="img text-8xl hover:text-red-400 peer transition-all duration-300">
            <ion-icon name="logo-laravel"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            Beginner
          </div>
        </div>
        <div className="skill text-center">
          <div className="img text-8xl hover:text-cyan-400 peer transition-all duration-300">
            <ion-icon name="logo-react"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            Beginner
          </div>
        </div>
        <div className="skill text-center">
          <div className="img text-8xl hover:text-green-400 peer transition-all duration-300">
            <ion-icon name="logo-nodejs"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            Beginner
          </div>
        </div>
        <div className="skill text-center">
          <div className="img text-8xl hover:text-green-400 peer transition-all duration-300">
            <ion-icon name="logo-vue"></ion-icon>
          </div>
          <div className="level opacity-0 peer-hover:opacity-100 peer-hover:-mt-5 transition-all duration-300">
            beginner
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
