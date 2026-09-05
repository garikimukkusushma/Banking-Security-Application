import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const savedUser =
      JSON.parse(localStorage.getItem("user")) || null;

    if (!savedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    const passwordHash = await hashPassword(password);

    if (
      email === savedUser.email &&
      passwordHash === savedUser.passwordHash
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#172554",
          }}
        >
          🔐 Secure Login
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Secure Banking Application
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            🔐 Login Securely
          </button>
        </form>

        <button
          onClick={() => navigate("/register")}
          style={{
            ...buttonStyle,
            background: "#64748b",
            marginTop: "15px",
          }}
        >
          Create New Account
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginTop: "8px",
  marginBottom: "18px",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "13px",
  background: "#172554",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Login;