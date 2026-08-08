import { Link } from "react-router-dom";
import "./Transactions.css";

function Transactions() {
  const transactions = [
    {
      date: "08 Aug 2026",
      description: "Salary Credit",
      type: "Credit",
      amount: "₹30,000",
    },
    {
      date: "07 Aug 2026",
      description: "Online Shopping",
      type: "Debit",
      amount: "₹2,500",
    },
    {
      date: "05 Aug 2026",
      description: "Money Transfer",
      type: "Debit",
      amount: "₹1,000",
    },
    {
      date: "03 Aug 2026",
      description: "Cash Deposit",
      type: "Credit",
      amount: "₹5,000",
    },
  ];

  return (
    <div className="transactions-page">
      <div className="transactions-container">

        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <h1>📋 Transactions</h1>
        <p>View your recent banking transactions.</p>

        <div className="transactions-card">
          <h2>Recent Transactions</h2>

          <div className="transaction-list">
            {transactions.map((transaction, index) => (
              <div className="transaction-row" key={index}>
                <div>
                  <strong>{transaction.description}</strong>
                  <span>{transaction.date}</span>
                </div>

                <div className={transaction.type.toLowerCase()}>
                  <strong>{transaction.amount}</strong>
                  <span>{transaction.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Transactions;