import React from "react";
import devhub from "../assets/devhub.png";

function Logo() {
  return (
    <div>
      <div className="flex gap-3">
        <h2 className="text-3xl p-5 font-semibold  text-center ">DevHub</h2>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" />
      </div>
    </div>
  );
}

export default Logo;
