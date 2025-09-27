import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SideNav.css";

function SideNav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside className="admin-sidenav">
      <div className="sidenav-brand">SMC Admin</div>
      <nav className="sidenav-menu">
        <NavLink to="/admin/slider" className={({isActive}) => isActive ? "active" : ""}>Slider Settings</NavLink>
        <NavLink to="/admin/news" className={({isActive}) => isActive ? "active" : ""}>News & Events</NavLink>
        <NavLink to="/admin/downloads" className={({isActive}) => isActive ? "active" : ""}>Downloads</NavLink>
        <NavLink to="/admin/notifications" className={({isActive}) => isActive ? "active" : ""}>Notifications</NavLink>
        <NavLink to="/admin/faculty" className={({isActive}) => isActive ? "active" : ""}>Faculty Manager</NavLink>
        <NavLink to="/admin/departments" className={({isActive}) => isActive ? "active" : ""}>Departments</NavLink>
        <NavLink to="/admin/research" className={({isActive}) => isActive ? "active" : ""}>Research</NavLink>
        <NavLink to="/admin/settings" className={({isActive}) => isActive ? "active" : ""}>Site Settings</NavLink>
        <NavLink to="/admin/profile" className={({isActive}) => isActive ? "active" : ""}>Profile</NavLink>
      </nav>

      <div className="sidenav-footer">
        <button className="btn-logout" onClick={logout}>Log Out</button>
      </div>
    </aside>
  );
}

export default SideNav;
