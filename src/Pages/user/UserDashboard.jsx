import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import UserNavbar from "../../components/UserNavbar";

const UserDashboard = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  return (
    <div className="user-dashboard">
      <UserNavbar />

     
      <header className="dashboard-header fade-in">
        <h1>Welcome, {username || "User"} 👋</h1>
        <p>
          This Smart City platform helps you connect with city services,
          report issues, give feedback, and stay updated with everything
          in one place.
        </p>
      </header>
      <section className="dashboard-info">
        <div className="info-text fade-in delay-1">
          <h2>About Our Website</h2>
          <p>
            Our Smart City Dashboard is designed to bring convenience
            and transparency to citizens. From accessing services,
            reporting problems, sharing feedback, to managing your
            profile, everything is at your fingertips. 🚀
          </p>
          <p>
            Explore the features using the navigation bar above and make
            your city smarter with your active participation.
          </p>

          <p>🌍 <b>Vision:</b> Build sustainable, connected, and citizen-friendly cities.</p>
          <p>⚡ <b>Mission:</b> Use technology to improve infrastructure, reduce issues, 
            and make everyday life simpler for everyone.</p>
          <p>🤝 <b>Together:</b> Let’s shape the future of urban living.</p>
        </div>
        <div className="info-images-gallery fade-in delay-2">
          <img
            src="https://www.constructionplacements.com/wp-content/uploads/2020/07/Smart-Cities-_-Smart-Urban-Infrastructures-Management-_-Free-Online-Courses.jpg"
            alt="Smart City"
          />
          <img
            src="https://www.biztechcs.com/wp-content/uploads/2020/10/smart-city-banner.png"
            alt="Digital Services"
          />
        </div>
      </section>
      <section className="how-to-report fade-in delay-3">
        <h2>How to Report?</h2>
        <ol>
          <li>Navigate to the <b>Report Issue</b> section from the navbar.</li>
          <li>Fill in the details of the problem (location, description, category).</li>
          <li>Attach an image or video if possible.</li>
          <li>Submit and track the status of your report.</li>
        </ol>
      </section>
      <section className="govt-contacts fade-in delay-3">
        <h2>Further Enqueries :- </h2>
        <div className="contact-card">
          <p><strong>Department:</strong> Smart City Helpdesk</p>
          <p><strong>Email:</strong> smartcity-support@gov.in</p>
          <p><strong>Phone:</strong> +91 6309745241</p>
          <p><strong>Office:</strong> City Corporation Building, Main Road, warangal</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
