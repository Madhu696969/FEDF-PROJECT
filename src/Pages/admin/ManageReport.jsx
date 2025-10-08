// src/pages/admin/ManageReports.jsx
import React, { useState, useMemo } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./ManageReport.css";

function ManageReport() {
  const [search, setSearch] = useState("");

  const [reports, setReports] = useState([
    { id: 1, user: "John Doe", issue: "Street light not working", status: "Pending" },
    { id: 2, user: "Jane Smith", issue: "Water leakage", status: "In Progress" },
    { id: 3, user: "Sam Wilson", issue: "Garbage not collected", status: "Resolved" },
    { id: 4, user: "Alice Brown", issue: "Potholes on road", status: "Pending" },
    { id: 5, user: "Tom Clark", issue: "Broken traffic signal", status: "In Progress" },
  ]);

  const updateStatus = (id, newStatus) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
  };

  const filteredReports = useMemo(() => {
    return reports.filter(
      (report) =>
        report.user.toLowerCase().includes(search.toLowerCase()) ||
        report.issue.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, reports]);

  return (
    <div className="manage-reports">
      <AdminNavbar />

      <div className="reports-container">
        <h1>Manage Reports</h1>
        <p>View and update all user-submitted reports.</p>

        {/* Search */}
        <div className="reports-search">
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Reports Table */}
        <table className="reports-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.user}</td>
                  <td>{report.issue}</td>
                  <td>
                    <span className={`status ${report.status.toLowerCase().replace(" ", "-")}`}>
                      {report.status}
                    </span>
                  </td>
                  <td>
                    <select
                      value={report.status}
                      onChange={(e) => updateStatus(report.id, e.target.value)}
                    >
                      <option value="Pending">Pending ⏳</option>
                      <option value="In Progress">In Progress 🔄</option>
                      <option value="Resolved">Resolved ✅</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No reports found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageReport;
