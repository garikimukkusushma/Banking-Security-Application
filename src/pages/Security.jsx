import React from "react";
import { useNavigate } from "react-router-dom";

function Security() {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      icon: "🔐",
      title: "Password Protection",
      description:
        "User passwords are processed using cryptographic hashing before storage in this demo application.",
      status: "Protected",
    },
    {
      icon: "🛡️",
      title: "SHA-256 Hashing",
      description:
        "SHA-256 converts password data into a fixed-length cryptographic hash.",
      status: "Enabled",
    },
    {
      icon: "🚧",
      title: "Protected Routes",
      description:
        "Dashboard and banking pages require the user to be logged in.",
      status: "Enabled",
    },
    {
      icon: "💸",
      title: "Transaction Validation",
      description:
        "Transfer amounts are checked before a demo transaction is processed.",
      status: "Enabled",
    },
    {
      icon: "💰",
      title: "Balance Validation",
      description:
        "Transfers greater than the available demo balance are rejected.",
      status: "Enabled",
    },
    {
      icon: "🚪",
      title: "Logout Security",
      description:
        "Logging out removes the demo login session and returns the user to Login.",
      status: "Enabled",
    },
  ];

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
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#172554",
            color: "white",
            padding: "35px",
            borderRadius: "18px",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ margin: 0 }}>🔐 Security Center</h1>

          <p
            style={{
              marginTop: "12px",
              fontSize: "17px",
              opacity: 0.9,
            }}
          >
            Security features implemented in the Secure Banking Application
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontSize: "38px" }}>
                {feature.icon}
              </div>

              <h2
                style={{
                  color: "#172554",
                  marginBottom: "10px",
                }}
              >
                {feature.title}
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>

              <div
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "7px 14px",
                  background: "#dcfce7",
                  color: "#166534",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                🟢 {feature.status}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#fff7ed",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            border: "1px solid #fed7aa",
          }}
        >
          <h2 style={{ color: "#9a3412" }}>
            ⚠️ Project Security Note
          </h2>

          <p style={{ color: "#7c2d12", lineHeight: "1.6" }}>
            This is an educational banking application. Real banking
            systems require server-side authentication, secure password
            hashing, HTTPS, database security, authorization, and
            additional security controls.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            marginTop: "25px",
            padding: "14px",
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

export default Security;