import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // 🔹 Demo authentication (replace with API call)
    setTimeout(() => {
      if (email === "admin@example.com" && password === "admin123") {
        const demoToken = "admin_demo_token";
        localStorage.setItem("admin_token", demoToken);
        navigate("/admin/dashboard", { replace: true });
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={login}>
        <h2>🔑 Admin Login</h2>

        {error && <div className="error">{error}</div>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="admin@example.com"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="••••••••"
        />

        <button type="submit" className="btn-auth" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div className="auth-links">
          <Link to="/admin/signup">Create account</Link>
          <Link to="/">← Back to site</Link>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
