import { useState } from "react";
import { Link } from "react-router-dom";
import "./Transfer.css";

function Transfer() {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    if (!accountNumber || !amount) {
      setMessage("Please enter account number and amount.");
      return;
    }

    setMessage(`Transfer request for ₹${amount} submitted successfully.`);
  };

  return (
    <div className="transfer-page">
      <div className="transfer-container">

        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <h1>💸 Transfer Money</h1>
        <p>Send money securely to another account.</p>

        <form className="transfer-card" onSubmit={handleTransfer}>

          <label>Recipient Account Number</label>

          <input
            type="text"
            placeholder="Enter account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          <label>Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button type="submit">
            Transfer Money
          </button>

          {message && (
            <p className="transfer-message">{message}</p>
          )}

        </form>

      </div>
    </div>
  );
}

export default Transfer;