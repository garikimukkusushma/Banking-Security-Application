import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h1 style={{ color: "#172554" }}>🏦 Secure Banking Dashboard</h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Welcome to your secure banking account
        </p>

        {/* Balance Card */}
        <div
          style={{
            background: "#172554",
            color: "white",
            padding: "30px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <h3>Available Balance</h3>
          <h1>₹50,000</h1>
          <p>Account status: 🟢 Active</p>
        </div>

        {/* Menu */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => navigate("/account")}
            style={buttonStyle}
          >
            👤
            <br />
            Account
          </button>

          <button
            onClick={() => navigate("/transfer")}
            style={buttonStyle}
          >
            💸
            <br />
            Transfer Money
          </button>

          <button
            onClick={() => navigate("/transactions")}
            style={buttonStyle}
          >
            📋
            <br />
            Transactions
          </button>

          <button
            onClick={() => navigate("/security")}
            style={buttonStyle}
          >
            🔐
            <br />
            Security
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/login")}
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "30px 20px",
  background: "white",
  border: "none",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#172554",
  cursor: "pointer",
  lineHeight: "2",
};

export default Dashboard;