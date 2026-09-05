import React from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#172554" }}>👤 Account Details</h1>

        <div
          style={{
            marginTop: "25px",
            padding: "25px",
            background: "#eff6ff",
            borderRadius: "12px",
          }}
        >
          <h2>Personal Information</h2>

          <p>
            <strong>Name:</strong>{" "}
            {user.name || "User"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email || "Not available"}
          </p>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "25px",
            background: "#f0fdf4",
            borderRadius: "12px",
          }}
        >
          <h2>🏦 Banking Information</h2>

          <p>
            <strong>Account Number:</strong> 1234567890
          </p>

          <p>
            <strong>Account Type:</strong> Savings Account
          </p>

          <p>
            <strong>Account Status:</strong> 🟢 Active
          </p>

          <p>
            <strong>Available Balance:</strong> ₹50,000
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#172554",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Account;