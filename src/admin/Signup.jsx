import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function AdminSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    setError("");

    // 🔹 Simple validation
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // 🔹 Demo signup (replace with API call later)
    const demoToken = "admin_demo_token";
    localStorage.setItem("admin_token", demoToken);

    // (optional) Save profile details in localStorage for now
    localStorage.setItem("admin_profile", JSON.stringify(form));

const response = await fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    password: form.password,
  }),
});
    // navigate("/admin/dashboard", { replace: true });

    const data = await response.json()
    console.log("User created", data);
    
  };
  return (
    <div className="signup-wrapper">
      <form className="signup-card" onSubmit={signup}>
        <h2>Create Admin Account</h2>

        {error && <div className="error">{error}</div>}

        <label>Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Phone (optional)</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g. +92 300 1234567"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button className="btn-signup">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignup;
