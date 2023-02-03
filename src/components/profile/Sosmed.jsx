import React from 'react'

function Sosmed() {
  return (
    <>
        <div className="sosmed flex gap-2 mt-5">
          <div className="text-3xl text-cyan-600 hover:text-cyan-400">
            <ion-icon name="logo-github" className=""></ion-icon>
          </div>
          <div className="text-3xl text-cyan-600 hover:text-cyan-400">
            <ion-icon name="logo-linkedin" className=""></ion-icon>
          </div>
          <div className="text-3xl text-cyan-600 hover:text-cyan-400">
            <ion-icon name="logo-instagram" className=""></ion-icon>
          </div>
          <div className="text-3xl text-cyan-600 hover:text-cyan-400">
            <ion-icon name="logo-facebook" className=""></ion-icon>
          </div>
          <div className="text-3xl text-cyan-600 hover:text-cyan-400">
            <ion-icon name="logo-discord" className=""></ion-icon>
          </div>
        </div>
    </>
  )
}

export default Sosmed