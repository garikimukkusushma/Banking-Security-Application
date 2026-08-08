import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <nav className="navbar">
        <div className="logo">🏦 SecureBank</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SecureBank</h1>

          <p>
            A secure and simple banking application
            designed for safe digital banking.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">
              Login
            </Link>

            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>

        <div className="hero-icon">
          🏦
        </div>
      </section>

      <section className="features">

        <div className="feature-card">
          🔐
          <h3>Secure Login</h3>
          <p>Protected authentication for users.</p>
        </div>

        <div className="feature-card">
          💳
          <h3>Easy Banking</h3>
          <p>Manage your banking activities easily.</p>
        </div>

        <div className="feature-card">
          🛡️
          <h3>Security</h3>
          <p>Security-focused banking application.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;