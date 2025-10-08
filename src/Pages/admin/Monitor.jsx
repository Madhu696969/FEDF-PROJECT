// src/pages/admin/MonitorInfrastructure.jsx
import React, { useState, useMemo } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./Monitor.css";
import StatCard from "../../components/StatCard";

function Monitor() {
  const [search, setSearch] = useState("");

  const [infrastructure, setInfrastructure] = useState([
    { id: 1, name: "Electricity", status: "Healthy" },
    { id: 2, name: "Water Supply", status: "Warning" },
    { id: 3, name: "Roads", status: "Critical" },
    { id: 4, name: "Public Transport", status: "Healthy" },
    { id: 5, name: "Internet Services", status: "Warning" },
    { id: 6, name: "Waste Management", status: "Healthy" },
    { id: 7, name: "Healthcare", status: "Critical" },
  ]);

  const updateStatus = (id, newStatus) => {
    setInfrastructure((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Filter for search
  const filteredData = useMemo(() => {
    return infrastructure.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, infrastructure]);

  // Count stats
  const stats = useMemo(() => {
    return {
      healthy: infrastructure.filter((i) => i.status === "Healthy").length,
      warning: infrastructure.filter((i) => i.status === "Warning").length,
      critical: infrastructure.filter((i) => i.status === "Critical").length,
    };
  }, [infrastructure]);

  return (
    <div className="monitor-infra">
      <AdminNavbar />

      <div className="infra-container">
        <h1>Monitor Infrastructure</h1>
        <p>Track and update the status of essential city infrastructure.</p>

        {/* Stat Cards */}
        <div className="infra-stats">
          <StatCard
            title="Healthy"
            value={stats.healthy}
            icon="✅"
            trend={{ value: stats.healthy, isPositive: true }}
          />
          <StatCard
            title="Warning"
            value={stats.warning}
            icon="⚠️"
            trend={{ value: stats.warning, isPositive: false }}
          />
          <StatCard
            title="Critical"
            value={stats.critical}
            icon="❌"
            trend={{ value: stats.critical, isPositive: false }}
          />
        </div>

        {/* Search */}
        <div className="infra-search">
          <input
            type="text"
            placeholder="Search infrastructure..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <table className="infra-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <select
                      value={item.status}
                      onChange={(e) => updateStatus(item.id, e.target.value)}
                    >
                      <option value="Healthy">Healthy ✅</option>
                      <option value="Warning">Warning ⚠️</option>
                      <option value="Critical">Critical ❌</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Monitor;
