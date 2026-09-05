import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transactions.css";

function Transactions() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    setTransactions(savedTransactions);
  }, []);

  return (
    <div className="transactions-page">
      <div className="transactions-container">

        <div className="transactions-header">
          <h1>📋 Transactions</h1>

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>
        </div>

        {transactions.length === 0 ? (
          <div className="no-transactions">
            <h2>No Transactions Found</h2>
            <p>Your transaction history will appear here.</p>
          </div>
        ) : (
          transactions.map((transaction) => (
            <div
              className="transaction-card"
              key={transaction.id}
            >
              <div className="transaction-info">
                <h3>{transaction.type}</h3>

                <p>
                  <strong>Description:</strong>{" "}
                  {transaction.description}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {transaction.date}
                </p>
              </div>

              <div className="transaction-amount">
                {transaction.amount}
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Transactions;