// src/components/DashboardWidgets.jsx
import React from 'react';
import './DashboardWidgets.css';

function DashboardWidgets() {
  // Sample data for recent reports
  const recentReports = [
    { id: 1, issue: 'Pothole on Main St', status: 'Pending', date: '2025-09-19' },
    { id: 2, issue: 'Broken streetlight', status: 'In Progress', date: '2025-09-18' },
    { id: 3, issue: 'Garbage collection missed', status: 'Resolved', date: '2025-09-17' },
    { id: 4, issue: 'Water leak', status: 'Pending', date: '2025-09-16' }
  ];

  // Sample data for recent feedback
  const recentFeedback = [
    { id: 1, message: 'Great service! Thank you!', rating: 5, date: '2025-09-19' },
    { id: 2, message: 'Response time could be improved', rating: 3, date: '2025-09-18' },
    { id: 3, message: 'The app is very useful', rating: 4, date: '2025-09-17' }
  ];

  return (
    <div className="dashboard-widgets">
      <div className="widget recent-reports">
        <h3>Recent Reports</h3>
        <div className="widget-content">
          {recentReports.map(report => (
            <div key={report.id} className="report-item">
              <div className="report-info">
                <h4>{report.issue}</h4>
                <p>Submitted: {report.date}</p>
              </div>
              <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                {report.status}
              </span>
            </div>
          ))}
        </div>
        <a href="/admin/reports" className="widget-link">View all reports →</a>
      </div>
      
      <div className="widget recent-feedback">
        <h3>Recent Feedback</h3>
        <div className="widget-content">
          {recentFeedback.map(feedback => (
            <div key={feedback.id} className="feedback-item">
              <div className="feedback-message">
                <p>{feedback.message}</p>
                <div className="feedback-meta">
                  <span className="rating">{"⭐".repeat(feedback.rating)}</span>
                  <span className="date">{feedback.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/admin/feedback" className="widget-link">View all feedback →</a>
      </div>
    </div>
  );
}

export default DashboardWidgets;