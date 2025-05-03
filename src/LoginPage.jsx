import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    // Validate the hardcoded credentials
    if (email === "admin@example.com" && password === "admin123") {
      onLogin(); // Update authentication state
      navigate("/user"); // Navigate to the user page
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <input id="email" type="email" placeholder="Email" required />
        <input id="password" type="password" placeholder="Password" required />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
