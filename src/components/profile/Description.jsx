import React from 'react'

function Description() {
  return (
    <>
        <div className="des flex items-center mb-5">
            <div className="des-img rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex
            "><ion-icon name="phone-portrait-outline"></ion-icon></div>
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
            <div className="des-img  rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex"><ion-icon name="mail-outline"></ion-icon></div>
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
            <div className="des-img rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex"><ion-icon name="calendar-outline"></ion-icon></div>
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
            <div className="des-img rounded-md p-2 mr-2 bg-cyan-600 text-2xl text-white flex stroke-2"><ion-icon name="location-outline"></ion-icon></div>
            <div className="des-text text-white text-xs">
                <div className="title font-light">
                    <p>LOCATION</p>
                </div>
                <div className="sub-title font-medium">
                    <p>Madiun, Indonesia</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Description