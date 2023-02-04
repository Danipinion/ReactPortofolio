import React from "react";
import Description from "./profile/Description";
import Picture from "./profile/Picture";
import Sosmed from "./profile/Sosmed";

function Profile() {
  return (
    <div className="border-0 border-cyan-500 sm:border-2 w-full sm:w-60 sm:p-11 sm:ml-8 mt-5 sm:mx-2 mx-0 rounded-lg flex items-center flex-col">
      <Picture />
      <div>
        <Description />
      </div>
      <div className="transition-all duration-200">
        <Sosmed />
      </div>
    </div>
  );
}

export default Profile;
