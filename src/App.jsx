import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LogIn from "./layouts/LogIn";
import SignUp from "./layouts/SignUp";
import ForgotPassword from "./layouts/ForgotPassword";

function App() {
  return (
    <div>
      {/* <Landing /> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
