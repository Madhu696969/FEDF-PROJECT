import React, { useState } from "react";
import "./Feedback.css";
import UserNavbar from "../../components/UserNavbar";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "General",
    message: "",
    rating: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);

    // reset form
    setFormData({
      name: "",
      category: "General",
      message: "",
      rating: 0,
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <UserNavbar />

      <div className="feedback-page">
        <div className="feedback-card">
          <h2 className="feedback-title">We value your feedback</h2>

          {submitted ? (
            <div className="success-message">
              🎉 Thank you for your feedback!
            </div>
          ) : (
            <form className="feedback-form" onSubmit={handleSubmit}>
              <label>
                Name (optional):
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>

              {formData.name && (
                <div className="avatar-preview">
                  <img
                    src={`https://ui-avatars.com/api/?name=${formData.name}&background=6c63ff&color=fff`}
                    alt="avatar"
                  />
                  <p>Hello, {formData.name} 👋</p>
                </div>
              )}

              <label>
                Category:
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Water Supply">🚰 Water Supply</option>
                  <option value="Waste Management">🗑️ Waste Management</option>
                  <option value="Street Lights">💡 Street Lights</option>
                  <option value="Road Maintenance">🛣️ Road Maintenance</option>
                  <option value="Public Transport">🚌 Public Transport</option>
                  <option value="Electricity Supply">⚡ Electricity Supply</option>
                  <option value="Healthcare">🏥 Healthcare</option>
                  <option value="Education">📚 Education</option>
                  <option value="Emergency Services">🚨 Emergency Services</option>
                  <option value="Feedback">📝 Feedback</option>
                  <option value="General">General</option>
                </select>
              </label>

              <div className="rating-section">
                <span>Rate Us:</span>
                <div className="emoji-rating">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span
                      key={num}
                      className={`emoji ${formData.rating >= num ? "selected" : ""}`}
                      onClick={() => handleRating(num)}
                    >
                      {["😡", "😕", "😐", "😊", "🤩"][num - 1]}
                    </span>
                  ))}
                </div>
              </div>

              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your feedback here..."
                  required
                />
              </label>

              <button type="submit" className="submit-btn">
                🚀 Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Feedback;
