import React from "react";
import "./Dashboard.css";

const Dashboard = ({ onNavigate }) => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>✨ Welcome to Jayme's Magic Phase 1 App ✨</h1>
        <p>Your marketing hub, reimagined beautifully.</p>
      </header>

      {/* Notifications Section */}
      <section className="dashboard-section">
        <h2 className="section-title">🔔 Notifications</h2>
        <div className="notification-card animate-card">
          <p>📅 New post scheduled for December 20th</p>
          <p>✨ Weekly View has been updated</p>
          <p>📢 Check out the latest announcements</p>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="dashboard-section">
        <h2 className="section-title">📣 Announcements</h2>
        <div className="announcement-grid">
          <div className="announcement-card animate-card">
            🎉 Big news! Weekly view now supports filtering.
          </div>
          <div className="announcement-card animate-card">
            ⭐ You can now add custom images to your posts.
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="dashboard-buttons">
        <button
          className="sparkle-btn glitter-btn"
          onClick={() => onNavigate("calendar")}
        >
          🌟 Go to Calendar View 📅
        </button>
        <button
          className="sparkle-btn glitter-btn"
          onClick={() => onNavigate("weekly")}
        >
          🌟 Go to Weekly View 📆
        </button>
        <button
          className="sparkle-btn glitter-btn"
          onClick={() => onNavigate("list")}
        >
          🌟 Go to List View 📋
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
