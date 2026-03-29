import React from "react";

function Button2() {
  return (
    <div>
      <div className=" mt-3 mb-3 flex ">
        <button
          to="/dashboard"
          className="cursor-pointer w-full text-center bg-slate-900 text-white py-3 rounded-2xl hover:bg-zinc-700"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Button2;
