import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const passwordHash = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const user = {
      name,
      email,
      passwordHash,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");

    navigate("/login");
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
          📝 Create Account
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

        <form onSubmit={handleRegister}>
          <label>Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={inputStyle}
          />

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
            🔐 Register Securely
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          style={{
            ...buttonStyle,
            background: "#64748b",
            marginTop: "15px",
          }}
        >
          Already have an account? Login
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

export default Register;