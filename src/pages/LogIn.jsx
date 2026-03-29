import { useState } from "react";
import { Link } from "react-router-dom";
import devhub from "../assets/devhub.png";
import Button from "../component/Button1";
import { useNavigate } from "react-router-dom";
import Input from "../component/Input";
import Logo from "../component/Logo";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (password.lenght < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    console.log("Form submitted");

    navigate("/dashboard");
  };
  // try {
  //   const res = await fetch(
  //     "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/login",
  //     {
  //       method: "POST",
  //       header: { "Content-Type": "Application/json" },
  //       body: JSON.stringify({
  //         email: form.email,
  //         password: form.password,
  //       }),
  //     },
  //   );

  //   const data = await res.json();
  //   console.log(data);
  // } catch (err) {
  //   console.error(err);
  // }

  return (
    <div className="min-h-screen flex flex-col items-center p-30 bg-gray-50">
      <Logo />

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
          <div>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Input />

          {error && <p>{error}</p>}

          <div>
            <div className="flex flex-cols justify-between">
              <label htmlFor="password">Password: </label>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
              required
            />
          </div>

          <Button />

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
