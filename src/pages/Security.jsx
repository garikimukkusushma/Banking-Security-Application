import React from "react";
import { useNavigate } from "react-router-dom";

function Security() {
  const navigate = useNavigate();

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
        <h1 style={{ color: "#172554" }}>🔐 Security Center</h1>

        <div
          style={{
            padding: "20px",
            marginTop: "20px",
            background: "#eff6ff",
            borderRadius: "10px",
          }}
        >
          <h2>🔑 Password Security</h2>
          <p>
            Passwords should be protected using secure hashing techniques.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            marginTop: "15px",
            background: "#f0fdf4",
            borderRadius: "10px",
          }}
        >
          <h2>🛡️ SHA-256</h2>
          <p>
            SHA-256 is a cryptographic hash function used to create a
            fixed-length hash from data.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            marginTop: "15px",
            background: "#fefce8",
            borderRadius: "10px",
          }}
        >
          <h2>🔒 Secure Transactions</h2>
          <p>
            Transaction information should be validated before processing.
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
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Security;