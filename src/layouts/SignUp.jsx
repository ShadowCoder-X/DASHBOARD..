import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useState } from "react";

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
    <div
      className="flex justify-center size- 40 max-auto
    h-180 p-6 "
    >
      <h1 className="text-4xl font-bold">DevHub</h1>
      <form
        onSubmit={handleSubmit}
        className="p-10 text-center bg-gray-200 border- w-120"
      >
        <h2 className="text-3xl font-bold text-black mb-4 ">
          Create Your Account
        </h2>
        <p>Start your learning Journey today</p>

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
              className="w-full mb-3 p-2 border rounded"
            />
          </div>

          <div className="mb-3">
            <img src={email_icon} alt="email-icon" className="w-6 h-6" />
            <label for="email">Eamil </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-3 py-3 border rounded"
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
              className="w-full mb-3 py-3 border rounded"
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
              className="w-full mb-3 p-2 border rounded"
            />
          </div>

          <button className="w-full bg-slate-900 text-white py-3 rounded cursor-pointer">
            Create Account
          </button>

          <p className="text-sm mt-3 text-center ">Already have an account? </p>
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
