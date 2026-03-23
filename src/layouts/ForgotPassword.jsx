import { useState } from "react";

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
    <div>
      <div>
        <form onSubmit={handleSubmit} className="">
          <h2>Forgot Password</h2>

          <p className="text-xl font-bold mb-4">
            Enter your email to receive a reset link
          </p>

          <div>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-3 p-2 border rounded"
                required
              />
            </div>

            <button type="submit" className="" disabled={loading}>
              {loading ? "Sending..." : "Reset Password"}{" "}
            </button>

            {message && <p className="">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
