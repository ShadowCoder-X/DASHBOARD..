import { useState } from "react";
import { Link } from "react-router-dom";
import devhub from "../assets/devhub.png";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          header: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        },
      );

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-30 bg-gray-50">
      <div className="flex gap-3">
        <h2 className="text-3xl p-5 font-semibold  text-center ">DevHub</h2>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 text-left mb-6  bg-white rounded-2xl font-medium max-w-125"
      >
        <h1 className="mb-1 text-lg font-semibold text-gray-800 ">
          Welcome Back
        </h1>
        <p className="mb-4 text-sm text-gray-500">
          Sign in to your account to continue learning
        </p>

        <div className="text-left">
          <div className="mb-4">
            <label for="email">Email </label>
            <input
              type="text"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
              required
            />
          </div>

          <div>
            <div className="flex flex- cols justify-between">
              <label for="password">Password: </label>

              <Link
                to="/forgotpassword"
                className="text-sm text-sky-500 font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
              required
            />
          </div>

          <button className=" mt-3 mb-3 w-full bg-slate-900 text-white py-3 px-5 rounded-2xl cursor-pointer hover:bg-zinc-700">
            Sign In
          </button>

          <div className="text-center ">
            <span className="text-sm mt-3 text-gray-500">
              Don't have an account?
            </span>{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </form>

      <Link
        to="/"
        className="text-sm text-gray-500 hover:underline hover:bg-blue-100 "
      >
        Back to home
      </Link>
    </div>
  );
}

export default Login;
