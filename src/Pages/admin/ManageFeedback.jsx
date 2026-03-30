// src/pages/admin/ManageFeedback.jsx
import React, { useState, useMemo } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./ManageFeedback.css";

function ManageFeedback() {
  const [search, setSearch] = useState("");

  const [feedbacks, setFeedbacks] = useState([
    { id: 1, user: "John Doe", rating: 5, message: "Excellent service!", status: "New" },
    { id: 2, user: "Jane Smith", rating: 3, message: "Water supply is okay, needs improvement.", status: "Reviewed" },
    { id: 3, user: "Sam Wilson", rating: 4, message: "Garbage collection has improved a lot.", status: "New" },
    { id: 4, user: "Alice Brown", rating: 2, message: "Street lights not working properly.", status: "Reviewed" },
    { id: 5, user: "Tom Clark", rating: 1, message: "Very slow response from authorities.", status: "New" },
  ]);

  const updateStatus = (id, newStatus) => {
    setFeedbacks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: newStatus } : f))
    );
  };

  const filteredFeedbacks = useMemo(() => {
    return feedbacks.filter(
      (f) =>
        f.user.toLowerCase().includes(search.toLowerCase()) ||
        f.message.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, feedbacks]);

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="manage-feedback">
      <AdminNavbar />

      <div className="feedback-container">
        <h1>Manage Feedback</h1>
        <p>View, search, and mark user feedback as reviewed.</p>

        {/* Search */}
        <div className="feedback-search">
          <input
            type="text"
            placeholder="Search feedback..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Feedback Table */}
        <table className="feedback-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Rating</th>
              <th>Message</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedbacks.length > 0 ? (
              filteredFeedbacks.map((f) => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{f.user}</td>
                  <td className="stars">{renderStars(f.rating)}</td>
                  <td>{f.message}</td>
                  <td>
                    <span
                      className={`status ${f.status.toLowerCase()}`}
                    >
                      {f.status}
                    </span>
                  </td>
                  <td>
                    <select
                      value={f.status}
                      onChange={(e) => updateStatus(f.id, e.target.value)}
                    >
                      <option value="New">New 🆕</option>
                      <option value="Reviewed">Reviewed ✅</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No feedback found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageFeedback;
