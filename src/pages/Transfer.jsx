import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Transfer() {
  const navigate = useNavigate();

  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    // Check fields
    if (!accountNumber || !amount) {
      alert("Please enter account number and amount");
      return;
    }

    const transferAmount = Number(amount);

    // Check amount
    if (transferAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Get current balance
    const currentBalance =
      Number(localStorage.getItem("balance")) || 50000;

    // Check sufficient balance
    if (transferAmount > currentBalance) {
      alert("Insufficient balance");
      return;
    }

    // Update balance
    const newBalance = currentBalance - transferAmount;

    localStorage.setItem("balance", newBalance);

    // Create transaction
    const newTransaction = {
      id: Date.now(),
      type: "Debit",
      description: `Transfer to ${accountNumber}`,
      amount: transferAmount,
      date: new Date().toLocaleDateString("en-IN"),
    };

    // Get old transactions
    const oldTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    // Add new transaction
    const updatedTransactions = [
      ...oldTransactions,
      newTransaction,
    ];

    // Save transactions
    localStorage.setItem(
      "transactions",
      JSON.stringify(updatedTransactions)
    );

    alert("Transfer successful!");

    // Go to transactions page
    navigate("/transactions");
  };

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
          maxWidth: "600px",
          margin: "auto",
          background: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            color: "#172554",
            marginBottom: "10px",
          }}
        >
          💸 Transfer Money
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "30px",
          }}
        >
          Send money securely to another account.
        </p>

        <form onSubmit={handleTransfer}>
          {/* Account Number */}
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Account Number
          </label>

          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
            style={inputStyle}
          />

          {/* Amount */}
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={inputStyle}
          />

          {/* Transfer Button */}
          <button
            type="submit"
            style={buttonStyle}
          >
            💸 Transfer Money
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            ...buttonStyle,
            background: "#64748b",
            marginTop: "15px",
          }}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#172554",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Transfer;