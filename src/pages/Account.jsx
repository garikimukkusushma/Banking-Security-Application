import { Link } from "react-router-dom";
import "./Account.css";

function Account() {
  return (
    <div className="account-page">
      <div className="account-container">

        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <h1>👤 Account Details</h1>

        <div className="account-card">
          <h2>SecureBank Account</h2>

          <div className="account-row">
            <span>Account Holder</span>
            <strong>Demo User</strong>
          </div>

          <div className="account-row">
            <span>Account Number</span>
            <strong>XXXX XXXX 4582</strong>
          </div>

          <div className="account-row">
            <span>Account Type</span>
            <strong>Savings Account</strong>
          </div>

          <div className="account-row">
            <span>Available Balance</span>
            <strong>₹25,000.00</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Account;