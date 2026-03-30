// src/components/AdminNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar admin-navbar">
      <div className="nav-container">
        {/* Left: Logo + Links */}
        <div className="nav-left">
          <div className="nav-logo">
            <h2>CityCare Admin</h2>
          </div>
          <div className={`nav-features ${isMenuOpen ? "active" : ""}`}>
            <div className="nav-item">
              <Link to="/admin/dashboard" className="nav-link">
                Dashboard
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/admin/services" className="nav-link">
                Manage Services
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/admin/infrastructure" className="nav-link">
                Monitor Infrastructure
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/admin/reports" className="nav-link">
                Manage Reports
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/admin/feedback" className="nav-link">
                Manage Feedback
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Profile */}
        <div className="nav-right">
          <div className="nav-item profile-item">
            <Link to="/profile" className="nav-link profile-link">
              Profile
            </Link>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
