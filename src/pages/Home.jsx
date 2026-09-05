import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#172554",
            color: "white",
            padding: "60px 40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "60px" }}>🏦</div>

          <h1
            style={{
              fontSize: "42px",
              margin: "15px 0",
            }}
          >
            Secure Banking Application
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "1.6",
              opacity: 0.9,
            }}
          >
            A secure and user-friendly banking application
            built for educational purposes.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button
              onClick={() => navigate("/login")}
              style={buttonStyle}
            >
              🔐 Login
            </button>

            <button
              onClick={() => navigate("/register")}
              style={{
                ...buttonStyle,
                background: "white",
                color: "#172554",
                marginLeft: "15px",
              }}
            >
              📝 Register
            </button>
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "#172554",
            marginTop: "45px",
          }}
        >
          🔒 Security Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <Feature
            icon="🔐"
            title="Secure Login"
            text="Protected login with password hashing."
          />

          <Feature
            icon="🛡️"
            title="SHA-256"
            text="Cryptographic hashing for password protection."
          />

          <Feature
            icon="💸"
            title="Secure Transfers"
            text="Demo transfers with balance validation."
          />

          <Feature
            icon="📋"
            title="Transactions"
            text="View your demo transaction history."
          />
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#172554" }}>
            🏦 Secure Banking System
          </h2>

          <p style={{ color: "#475569", lineHeight: "1.6" }}>
            This project demonstrates basic concepts of
            authentication, password hashing, protected routes,
            transaction validation, and account management.
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ fontSize: "40px" }}>{icon}</div>

      <h3 style={{ color: "#172554" }}>{title}</h3>

      <p
        style={{
          color: "#64748b",
          lineHeight: "1.5",
        }}
      >
        {text}
      </p>
    </div>
  );
}

const buttonStyle = {
  padding: "14px 30px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Home;