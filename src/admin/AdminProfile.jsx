import React from "react";
import "./AdminProfile.css";

function AdminProfile() {
  const admin = { name: "Admin User", email: "admin@smc.edu" };
  return (
    <div className="admin-profile">
      <h2>Profile</h2>
      <div className="profile-card">
        <div className="avatar">AU</div>
        <div className="info">
          <h3>{admin.name}</h3>
          <p>{admin.email}</p>
          <div className="meta">
            <span>Role: Administrator</span>
            <span>Joined: 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
