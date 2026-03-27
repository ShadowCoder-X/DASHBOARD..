import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import devhub from "../assets/devhub.png";
import LogIn from "../pages/LogIn";
import expert from "../assets/expert.png";
import flexible from "../assets/flexible.png";
import certificate from "../assets/certificate.png";

function Landing() {
  return (
    <div className="text-center">
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

      <div className="bg-gray-50 py-20 px-4 text-center flex-col items-center justify-center  ">
        <div className=" max-w-3xl w-full mx-auto space-y-6 ">
          <h1 className="text-4xl  md:text-6xl text-gray-900 font-bold font-sans mb-3">
            Learn Anything, <br />
            <span className="text-blue-500">Anything, Anywhere</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-500  mb-6 ">
            Join thousands of learners mastering new skills with our
            comprehensive online courses. Expert instructors, flexible learning,
            and lifetime access.
          </p>

          <div className="mb-30 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/login"
              className="py-3 px-3 hover:underline bg-slate-900 rounded-xl text-white font-medium w-full sm:w-auto hover:bg-zinc-700 "
            >
              Start Learning
            </Link>
            <Link
              to="/signup"
              className="hover:bg-gray-300 bg-white rounded-xl text-black py-3 px-3 font-mediun w-full sm:w-auto hover:underline"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-black mb-10 ">
            {" "}
            Why Choose LearnHub?{" "}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-15">
          <div className="p-6 bg-white border-none  rounded-xl w-full max-w-100 text-left ">
            <img
              src={expert}
              alt="expert icon"
              className="w-12 h-12 bg-yellow-100 rounded-2xl mb-3 py-1 px-1 "
            />
            <h3 className="font-bold text-xl mb-3">Expert Instructors</h3>
            <p>
              Learn from industry professionals with years of real-world
              experience.
            </p>
          </div>

          <div className=" p-6 bg-white rounded-xl border-none w-full max-w-100 text-left">
            <img
              src={flexible}
              alt="flexible icon"
              className="w-12 h-12 bg-pink-100 mb-3 rounded-2xl
              py-1
              px-1"
            />
            <h3 className="font-bold text-xl mb-3">Flexible Learning</h3>
            <p>
              Study at your own pace with lifetime access to all course
              materials.
            </p>
          </div>

          <div className=" p-6 bg-white border-none  rounded-xl w-full max-w-100 text-left">
            <img
              src={certificate}
              alt="certificate icon"
              className="w-12 h-12 bg-blue-100 rounded-2xl mb-3 py-1 px-1"
            />
            <h3 className="font-bold text-xl mb-3">Certificates</h3>
            <p>Earn recognized certificates upon completing your courses.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 p-25">
        <h3 className="font-bold text-white text-3xl mb-6">
          Ready to Start Your Learning Journey?
        </h3>
        <p className="text-white text-xl font-light mb-6 ">
          Join over 50,000 students already learning on LearnHub
        </p>

        <Link
          to="/login"
          className="  hover:bg-gray-300 px-4 py-2 border-none bg-white rounded-xl font-bold hover:underline"
        >
          Create Free Account{" "}
        </Link>
      </div>

      <div className="border-none p-6 bg-gray-50 max-w-full m-0-auto">
        @2026 DevHub. All rights reserved.
      </div>
    </div>
  );
}

export default Landing;
