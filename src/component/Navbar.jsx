import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import devhub from "../assets/devhub.png";
import LogIn from "../pages/LogIn";

function Navbar() {
  return (
    <div className="sticky top-0 flex justify-around w-full p-4 border-2  bg-white">
      <div className=" flex gap-4">
        <Link to="" className="text-4xl font-bold ">
          {" "}
          DevHub{" "}
        </Link>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" />
      </div>

      <nav className=" flex ">
        <Link
          to="/login"
          className=" hover:bg-gray-300 bg-white hover:underline rounded-xl text-black py-3 px-3 font-mediun w-full sm:w-auto gap-4"
        >
          Log In{" "}
        </Link>

        <Link
          to="/signup"
          className="hover:bg-zinc-700 py-3 px-3 hover:underline bg-slate-900 rounded-xl text-white font-medium w-full sm:w-auto"
        >
          Sign Up{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
