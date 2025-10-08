// src/pages/user/ProfilePage.jsx
import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/UserNavbar"; // Import your custom UserNavbar
import "./ProfilePage.css";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  if (!userData) {
    return (
      <>
        <UserNavbar />
        <p className="no-data">No profile data found. Please signup first.</p>
      </>
    );
  }

  return (
    <>
      <UserNavbar />
      <div className={`profile-layout ${isLoaded ? 'loaded' : ''}`}>
        <div className="profile-left">
          <div className="avatar-container">
            <img
              src={`https://ui-avatars.com/api/?name=${userData.fullName}&background=random`}
              alt="Profile"
              className="profile-avatar"
            />
            <div className="avatar-overlay">
              <span>View</span>
            </div>
          </div>
          <h2 className="profile-name">{userData.fullName}</h2>
          <p className="username">@{userData.username}</p>
          
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Reports</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Feedback</span>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <div className="profile-card">
            <h3 className="section-title">
              <span className="title-icon">👤</span>
              Personal Information
            </h3>
            
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div className="info-content">
                  <label>Email</label>
                  <p>{userData.email}</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div className="info-content">
                  <label>Phone</label>
                  <p>{userData.phone}</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">🎂</span>
                <div className="info-content">
                  <label>Date of Birth</label>
                  <p>{userData.dob}</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">👤</span>
                <div className="info-content">
                  <label>Gender</label>
                  <p>{userData.gender}</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">🔢</span>
                <div className="info-content">
                  <label>Age</label>
                  <p>{userData.age}</p>
                </div>
              </div>
            </div>
            
            <div className="bio-section">
              <h4 className="bio-title">
                <span className="title-icon">📝</span>
                About Me
              </h4>
              <p className="bio-content">{userData.bio || "No bio yet. Click edit to add a bio."}</p>
            </div>
            
            <div className="action-buttons">
              <button className="edit-btn">
                <span className="btn-icon">✏️</span>
                Edit Profile
              </button>
              
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("userData");
                  alert("Logged out successfully!");
                  window.location.href = "/login";
                }}
              >
                <span className="btn-icon">🚪</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;