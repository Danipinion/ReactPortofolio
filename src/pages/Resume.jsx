import React from "react";

function Resume() {
  return (
    <div className="h-96 sm:mb-0 mb-10">
      <h1 className="text-white font-bold text-3xl mb-4 text-center">Resume</h1>
      <div className="river relative mt-1 sm:ml-10 ml-3">
        <hr className="border-2 h-56 border-cyan-500 absolute left-10" />
        <div className="school">
          <div>
            <div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
              <ion-icon name="school-outline"></ion-icon>
            </div>
            <p className="ml-20">TK Thoriqul Huda</p>
            <p className="ml-20 text-sm">2015-2017</p>
          </div>
          <div className="mt-5">
            <div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
              <ion-icon name="school-outline"></ion-icon>
            </div>
            <p className="ml-20">MI Thoriqul Huda</p>
            <p className="ml-20 text-sm">2017-2019</p>
          </div>
          <div className="mt-5">
            <div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
              <ion-icon name="school-outline"></ion-icon>
            </div>
            <p className="ml-20">MTS Al-Istiqomah</p>
            <p className="ml-20 text-sm">2019-2021</p>
          </div>
          <div className="mt-5">
            <div className="circle absolute left-6 text-2xl w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
              <ion-icon name="school-outline"></ion-icon>
            </div>
            <p className="ml-20">SMK Negeri 1 Geger</p>
            <p className="ml-20 text-sm">2021-Sekarang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
