import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./LandingPage.css";
import cityImage from "./city.jpg"; 

const LandingPage = () => {
  const [displayText, setDisplayText] = useState("");

  const text = `Thhe Smart City Management Application is designed to streamline the handling of essential city-related information, including public services, infrastructure, and amenities. It provides a centralized platform where administrators can update and monitor city data efficiently. Citizens, on the other hand, can access and search for city details with ease. The system also allows users to report issues related to public services and share feedback about amenities. Overall, it bridges the gap between city authorities and residents, ensuring better urban management and communication.`;

  useEffect(() => {
    let i = 0;
    setDisplayText(""); 
    const speed = 40;

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div style={{ 
      background: `url(${cityImage}) no-repeat center center/cover`,
      height: "100vh"
    }}>
      <Navbar />
      <div className="content">
        <h1>Smart City Management</h1>
        <p>{displayText}</p>
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default LandingPage;
