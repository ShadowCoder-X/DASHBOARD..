import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import devhub from "../assets/devhub.png";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password != form.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
    <div className="min-h-screen flex flex-col items-center p-20 bg-gray-50">
      <div className="flex gap-3">
        <h1 className="text-4xl font-bold p-5">DevHub</h1>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mb-6 p-6 text-left bg-white rounded-2xl font-medium max-w-125"
      >
        <h1 className="mb-1 text-lg font-semibold text-gray-800 ">
          Create Your Account{" "}
        </h1>
        <p className="mb-4 text-sm text-gray-500">
          Start your learning journey today
        </p>

        <div className="text-left">
          <div className="mb-3">
            <img src={user_icon} alt="user-icon" className="w-6 h-6" />
            <label for="full-name">Full Name </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="John DOe"
              value={form.name}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
            />
          </div>

          <div className="mb-3">
            <img src={email_icon} alt="email-icon" className="w-6 h-6" />
            <label for="email">Email </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
            />
          </div>

          <div className="mb-3">
            <img src={password_icon} alt="password-icon" className="h-6 w-6" />
            <label for="password">Password: </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
            />
          </div>

          <div className="mb-3">
            <img src={password_icon} alt="password-icon" className="w-6 h-6" />
            <label for="confirm-password">Confirm Password: </label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
            />
          </div>

          <button className="w-full bg-slate-900 text-white py-3 rounded cursor-pointer">
            Create Account
          </button>

          <div className="text-center mt-3">
            <span className="text-sm text-gray-500">
              Already have an account?{" "}
            </span>
            {""}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </form>

      <Link
        to="/"
        className="text-sm text-gray-500 hover:underline hover:bg-blue-100"
      >
        Back to home
      </Link>
    </div>
  );
}
export default SignUp;
