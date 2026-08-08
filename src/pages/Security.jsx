import { Link } from "react-router-dom";
import "./Security.css";

function Security() {
  return (
    <div className="security-page">
      <div className="security-container">

        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <h1>🔐 Banking Security</h1>
        <p>Security features used in our banking application.</p>

        <div className="security-cards">

          <div className="security-card">
            <div className="security-icon">🔑</div>
            <h2>Password Security</h2>
            <p>
              Passwords should be protected using secure one-way
              hashing before being stored by the server.
            </p>
          </div>

          <div className="security-card">
            <div className="security-icon">🛡️</div>
            <h2>SHA-256</h2>
            <p>
              SHA-256 is a cryptographic hash function that can
              be used as part of a secure password-storage design.
            </p>
          </div>

          <div className="security-card">
            <div className="security-icon">🔒</div>
            <h2>Authentication</h2>
            <p>
              User authentication helps ensure that only authorized
              users can access protected banking features.
            </p>
          </div>

          <div className="security-card">
            <div className="security-icon">🚨</div>
            <h2>Secure Transactions</h2>
            <p>
              Banking transactions should be validated on the server
              before any financial operation is performed.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Security;