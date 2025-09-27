import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* // <div className="site-header" > */}
      <div className="top-bar">
        <div className="header-container">
          <div className="contact-info">
            <span>
              <i className="fas fa-phone"></i> (048) 9232004
            </span>
            <span>
              <i className="fas fa-envelope"></i> principle.smc.health@punjab.gov.pk
            </span>
          </div>
          <div className="social-icons">
            <a href="http://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <nav className="main-navbar" style={{position:"sticky",top:"0",zIndex:"100000"}}> 
        <div className="header-container nav-container" >
          <NavLink to="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className={`navbar-links ${menuOpen ? "open" : ""}`} id="navbarNav">
            <ul>
              <li>
                <NavLink to="/Home" className={({ isActive }) => (isActive ? "active" : "")}>
                  HOME
                </NavLink>
              </li>

              <li className="dropdown">
                <NavLink
                  to="/vision-mission"
                  className={
                    path.startsWith("/vision-mission") || path.startsWith("/principal-message")
                      ? "active"
                      : ""
                  }
                >
                  ABOUT US <i className="fas fa-chevron-down"></i>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/vision-mission">Vision &amp; Mission</NavLink>
                  </li>
                  <li>
                    <NavLink to="/principal-message">Principal's Message</NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <NavLink
                  to="/admission-criteria"
                  className={path.startsWith("/admission") ? "active" : ""}
                >
                  ADMISSIONS <i className="fas fa-chevron-down"></i>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/admission-criteria">Admission Criteria</NavLink>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <NavLink
                  to="/departments"
                  className={
                    path.startsWith("/faculty-of-basic-sciences") ||
                    path.startsWith("/faculty-of-clinical-sciences")
                      ? "active"
                      : ""
                  }
                >
                  DEPARTMENTS <i className="fas fa-chevron-down"></i>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/faculty-of-basic-sciences">Faculty of Basic Sciences</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faculty-of-clinical-sciences">Faculty of Clinical Sciences</NavLink>
                  </li>
                </ul>
              </li>

              <li><NavLink to="/research">RESEARCH</NavLink></li>
              <li><NavLink to="/news-events">NEWS &amp; EVENTS</NavLink></li>
              <li><NavLink to="/notifications">NOTIFICATIONS</NavLink></li>
              <li><NavLink to="/downloads">DOWNLOADS</NavLink></li>
              <li><NavLink to="/contact-us">CONTACT US</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    {/* // </div> */}
      </>
  );
}

export default Header;
