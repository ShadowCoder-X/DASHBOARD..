import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDafault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/forgot-password",
        {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("Password reset link sent to your email ");
      } else {
        setMessage(data.massage || " Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Try again later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-30 bg-gray-50">
      <h1 className="text-3xl p-5 font-semibold  text-center">DevHub</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mb-5 p-6 text-left bg-white rounded-2xl font-medium max-w-125"
      >
        <h2 className="mb-1 text-lg font-semibold text-gray-800">
          Reset Your Password
        </h2>

        <p className="mb-4 text-sm text-gray-500">
          Enter your email to receive a reset link
        </p>

        <div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-gray-100"
              required
            />
          </div>

          <button type="submit" className="" disabled={loading}>
            {loading ? "Sending..." : "Reset Password"}{" "}
          </button>

          {message && <p className="">{message}</p>}
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

export default ForgotPassword;
