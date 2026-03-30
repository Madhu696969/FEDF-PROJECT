import React, { useState } from "react";
import "./Report.css";
import UserNavbar from "../../components/UserNavbar";

const Report = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Low",
    image: null,
    location: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleLocationFill = () => {
    setFormData((prev) => ({
      ...prev,
      location: "Near City Park, Block 4",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report Submitted:", formData);
    setSubmitted(true);

    // reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      priority: "Low",
      image: null,
      location: "",
    });
    setImagePreview(null);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <UserNavbar />

      {/* Animated Header Banner */}
      <div className="report-header">
        <h1>📝 Smart Citizen Report Portal</h1>
        <p>Help us make your city better by reporting issues quickly 🚀</p>
      </div>

      <div className="report-page">
        <div className="report-container">
          <h2 className="report-title">Report an Issue</h2>

          {/* About Section */}
          <div className="about-report">
            <h3>ℹ️ How to Fill the Report</h3>
            <ul>
              <li><strong>Title:</strong> Short title (e.g., “Streetlight not working”).</li>
              <li><strong>Description:</strong> Clear details of the issue.</li>
              <li><strong>Category:</strong> Select the relevant department.</li>
              <li><strong>Priority:</strong> Choose urgency wisely.</li>
              <li><strong>Image:</strong> Attach a clear photo for faster action.</li>
            </ul>
            <p className="tip">💡 The clearer your report, the quicker it gets solved.</p>
          </div>

          {submitted && (
            <div className="success-message">
              ✅ Your report has been submitted successfully!
            </div>
          )}

          <form className="report-form" onSubmit={handleSubmit}>
            <label>
              Issue Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <label>
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">-- Select --</option>
                <option value="Water Supply">💧 Water Supply</option>
                <option value="Waste Management">🗑️ Waste Management</option>
                <option value="Street Lights">💡 Street Lights</option>
                <option value="Road Maintenance">🛣️ Road Maintenance</option>
                <option value="Public Transport">🚌 Public Transport</option>
                <option value="Electricity">⚡ Electricity</option>
                <option value="Healthcare">🏥 Healthcare</option>
                <option value="Education">📚 Education</option>
                <option value="Emergency">🚨 Emergency</option>
                <option value="Feedback">📝 Feedback</option>
              </select>
            </label>

            <label>
              Priority:
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>

            <label>
              📍 Location:
              <div className="location-row">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter or auto-fill location"
                />
                <button type="button" onClick={handleLocationFill} className="location-btn">
                  Auto Fill
                </button>
              </div>
            </label>

            <label>
              🖼️ Upload Image:
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </label>

            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}

            <button type="submit" className="submit-btn">
              🚀 Submit Report
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Report;
