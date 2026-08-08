import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <nav className="dashboard-navbar">
        <div className="dashboard-logo">🏦 SecureBank</div>

        <div className="dashboard-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="dashboard-container">

        <div className="welcome-section">
          <h1>Welcome to Your Dashboard 👋</h1>
          <p>Manage your banking activities securely.</p>
        </div>

        <div className="balance-card">
          <p>Available Balance</p>
          <h2>₹25,000.00</h2>
          <span>Account: XXXX XXXX 4582</span>
        </div>

        <div className="dashboard-cards">

          {/* Account */}
          <div className="dashboard-card">
            <div className="card-icon">💳</div>
            <h3>Account</h3>
            <p>View your account details.</p>

            <Link to="/account" className="dashboard-button">
              View Account
            </Link>
          </div>

          {/* Transfer Money */}
          <div className="dashboard-card">
            <div className="card-icon">💸</div>
            <h3>Transfer Money</h3>
            <p>Transfer money securely.</p>

            <Link to="/transfer" className="dashboard-button">
              Transfer
            </Link>
          </div>

          {/* Transactions */}
          <div className="dashboard-card">
            <div className="card-icon">📋</div>
            <h3>Transactions</h3>
            <p>View recent transactions.</p>

            <Link to="/transactions" className="dashboard-button">
              View Transactions
            </Link>
          </div>

          {/* Security */}
          <div className="dashboard-card">
            <div className="card-icon">🔐</div>
            <h3>Security</h3>
            <p>View banking security features.</p>

            <Link to="/security" className="dashboard-button">
              Security Center
            </Link>
          </div>

        </div>

        <div className="transactions">
          <h2>Recent Transactions</h2>

          <div className="transaction">
            <span>🛒 Online Shopping</span>
            <strong>- ₹1,200</strong>
          </div>

          <div className="transaction">
            <span>💰 Salary Credit</span>
            <strong>+ ₹20,000</strong>
          </div>

          <div className="transaction">
            <span>☕ Food & Restaurant</span>
            <strong>- ₹450</strong>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;