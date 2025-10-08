// src/components/UserNavbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserNavbar.css";

const UserNavbar = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="UserNav">
      {/* Left Side */}
      <div className="nav-left">
        <h2 className="nav-title">Smart City</h2>
      </div>

      {/* Right Side */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/user/dashboard">Dashboard</Link></li>
          <li><Link to="/user/services">Services</Link></li>
          <li><Link to="/user/report">Report Issue</Link></li>
          <li><Link to="/user/feedback">Feedback</Link></li>
          <li onClick={handleLogout} id="log">
              Logout
          </li>
        </ul>

        {/* Profile */}
        <div className="profile-section">
          <Link to="/user/profile" title={userData?.fullName || "Profile"}>
            <img
              src={
                userData
                  ? `https://ui-avatars.com/api/?name=${userData.fullName}&background=random`
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile"
              className="profile-img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
