import React, { useState } from "react";
function Description() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className=" text-2xl fixed right-10 sm:left-10 sm:top-8 top-5 text-cyan-600"
        onClick={() => setOpen(!open)}
        href="#"
      >
        {open ? (
          <ion-icon name="grid"></ion-icon>
        ) : (
          <ion-icon name="grid-outline"></ion-icon>
        )}
      </div>
      <div
        className={`${
          open
            ? "sm:inline-block opacity-100 translate-y-0 transition-all duration-300"
            : "opacity-0 sm:inline-block -translate-y-9 absolute "
        }`}
      >
        <div className="des flex items-center mb-5">
          <div
            className="des-img rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex
            "
          >
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className="des-text text-white text-xs">
            <div className="title font-light">
              <p>PHONE</p>
            </div>
            <div className="sub-title font-medium">
              <p>+62895808475151</p>
            </div>
          </div>
        </div>
        <div className="des flex items-center mb-5">
          <div className="des-img  rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="des-text text-white text-xs">
            <div className="title font-light">
              <p>EMAIL</p>
            </div>
            <div className="sub-title font-medium">
              <p>tesdanu@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="des flex items-center mb-5">
          <div className="des-img rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div className="des-text text-white text-xs">
            <div className="title font-light">
              <p>AGE</p>
            </div>
            <div className="sub-title font-medium">
              <p>16</p>
            </div>
          </div>
        </div>
        <div className="des flex items-center mb-5">
          <div className="des-img rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex stroke-2">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="des-text text-white text-xs">
            <div className="title font-light">
              <p>LOCATION</p>
            </div>
            <div className="sub-title font-medium">
              <p>Madiun, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
