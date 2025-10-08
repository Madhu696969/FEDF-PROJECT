import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Madhu" && password === "Madhu@123") {
      localStorage.setItem("username", username); // Save username
      navigate("/user/dashboard");
    } else if (username === "AdminDemo" && password === "admin123") {
      localStorage.setItem("username", username);
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials! Try again.");
    }
  };
  const loginAsUserDemo = () => {
    localStorage.setItem("username", "UserDemo");
    navigate("/user/dashboard");
  };

  const loginAsAdminDemo = () => {
    localStorage.setItem("username", "AdminDemo");
    navigate("/admin/dashboard");
  };

  return (
    <div className="card login-card">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="demo-buttons">
        <h4>Quick Demo Login</h4>
        <button className="user-btn" onClick={loginAsUserDemo}>
          Login as UserDemo
        </button>
        <button className="admin-btn" onClick={loginAsAdminDemo}>
          Login as AdminDemo
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
