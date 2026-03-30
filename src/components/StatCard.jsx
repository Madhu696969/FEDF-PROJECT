// src/components/StatCard.jsx
import React from 'react';
import './StatCard.css';

function StatCard({ title, value, icon, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3>{title}</h3>
        <span className="stat-icon">{icon}</span>
      </div>
      <div className="stat-value">{value}</div>
      {trend && (
        <div className={`stat-trend ${trend.isPositive ? 'positive' : 'negative'}`}>
          {trend.isPositive ? '↑' : '↓'} {trend.value}% from last week
        </div>
      )}
    </div>
  );
}

export default StatCard;