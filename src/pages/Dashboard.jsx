import React from "react";
import devhub from "../assets/devhub.pnh";

function Dashboard() {
  return (
    <div>
      <div className=" flex gap-4">
        <Link to="" className="text-4xl font-bold ">
          {" "}
          DevHub{" "}
        </Link>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" />
      </div>

      <div></div>
    </div>
  );
}

export default Dashboard;
