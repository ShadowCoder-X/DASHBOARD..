import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import LogIn from "../layouts/LogIn";
// import SignUp from "../layouts/SignUp";

function Landing() {
  return (
    <div className="text-center">
      <div className="sticky top-0 flex justify-around w-full p-4 border-2  bg-white">
        <Link to="" className="text-4xl font-bold">
          {" "}
          DevHub{" "}
        </Link>

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
            Get Started
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
            <button className="py-3 px-3 hover:underline bg-slate-900 rounded-xl text-white font-medium w-full sm:w-auto hover:bg-zinc-700 ">
              Start Learning
            </button>
            <button className="hover:bg-gray-300 bg-white rounded-xl text-black py-3 px-3 font-mediun w-full sm:w-auto">
              Explore Courses
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-black mb-10 ">
            {" "}
            Why Choose LearnHub?{" "}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-15">
          <div className="border-2 p-6 bg-white border-none  rounded-xl ">
            <h3 className="font-bold mb-3">Expert Instructors</h3>
            <p>
              Learn from industry professionals with years of real-world
              experience.
            </p>
          </div>

          <div className="border-2 p-6 bg-white rounded-xl border-none">
            <h3 className="font-bold mb-3">Flexible Learning</h3>
            <p>
              Study at your own pace with lifetime access to all course
              materials.
            </p>
          </div>

          <div className="border-2 p-6 bg-white border-none  rounded-xl">
            <h3 className="font-bold mb-3">Certificates</h3>
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

        <button className="  hover:bg-gray-300 px-4 py-2 border-none bg-white rounded-xl font-bold ">
          Create Free Account{" "}
        </button>
      </div>

      <div className="border-none p-6 bg-gray-50 max-w-full m-0-auto">
        @2026 DevHub. All rights reserved.
      </div>
    </div>
  );
}

export default Landing;
