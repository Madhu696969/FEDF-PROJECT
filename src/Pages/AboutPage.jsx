import React from "react";
import Navbar from "../components/Navbar";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <h1>About Smart City Management</h1>
        <p>
          The <b>Smart City Management Application</b> is built to improve 
          urban living by centralizing essential city-related information. 
          Our platform enables administrators to manage public services, 
          monitor infrastructure, and update important data in real-time.
        </p>
        <p>
          For citizens, the application provides a simple way to access 
          city details, report issues, and share feedback on amenities. 
          This bridges the gap between city authorities and residents, 
          ensuring transparency, efficiency, and better communication.
        </p>
        <p>
          Together, we aim to build smarter, safer, and more connected cities 
          for the future.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
