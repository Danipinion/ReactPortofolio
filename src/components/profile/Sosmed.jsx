import React from "react";

function Sosmed() {
  return (
    <>
      <div className="sosmed flex gap-2 mt-5">
        <a
          href="https://github.com/YoYic54"
          className="text-3xl text-cyan-600 hover:text-cyan-400"
        >
          <ion-icon name="logo-github" className=""></ion-icon>
        </a>
        <div className="text-3xl text-cyan-600 hover:text-cyan-400">
          <ion-icon name="logo-linkedin" className=""></ion-icon>
        </div>
        <a
          href="https://www.instagram.com/danipinion57/"
          className="text-3xl text-cyan-600 hover:text-cyan-400"
        >
          <ion-icon name="logo-instagram" className=""></ion-icon>
        </a>
        <a
          href="https://www.facebook.com/tes.tus.982/"
          className="text-3xl text-cyan-600 hover:text-cyan-400"
        >
          <ion-icon name="logo-facebook" className=""></ion-icon>
        </a>
        <div className="text-3xl text-cyan-600 hover:text-cyan-400">
          <ion-icon name="logo-discord" className=""></ion-icon>
        </div>
      </div>
    </>
  );
}

export default Sosmed;
