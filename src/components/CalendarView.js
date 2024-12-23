import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import "./CalendarView.css";
import posts from "../postsData";
import NewPostModal from "./NewPostModal";

const CalendarView = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentView, setCurrentView] = useState("calendar"); // 'calendar', 'weekly', 'list'
  const [isModalOpen, setModalOpen] = useState(false);

  // Generate all days for December (excluding Sundays)
  const generateDaysOfMonth = () => {
    const daysOfMonth = [];
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    for (let date = 1; date <= 31; date++) {
      const dayOfWeek = weekdays[(date - 1) % 6];
      daysOfMonth.push({ date, weekday: dayOfWeek });
    }
    return daysOfMonth;
  };

  const daysOfMonth = generateDaysOfMonth();

  const handleDayClick = (day) => {
    const postForDay = posts.find((post) => post.day === `Day ${day.date}`);
    setSelectedPost(
      postForDay || {
        day: day.date,
        title: "No posts yet",
        description: "No additional details",
      }
    );
  };

  const handleSavePost = (newPost) => {
    console.log("New Post Saved:", newPost);
    setModalOpen(false);
  };

  return (
    <div className={`calendar-container ${selectedPost ? "shrink" : ""}`}>
      {/* Top Navigation Bar */}
      <div className="view-navigation">
        <button
          onClick={() => setCurrentView("calendar")}
          className={currentView === "calendar" ? "active" : ""}
        >
          Calendar
        </button>
        <button
          onClick={() => setCurrentView("weekly")}
          className={currentView === "weekly" ? "active" : ""}
        >
          Weekly
        </button>
        <button
          onClick={() => setCurrentView("list")}
          className={currentView === "list" ? "active" : ""}
        >
          List
        </button>
        <button onClick={() => setModalOpen(true)} className="new-post-btn">
          + New Post
        </button>
      </div>

      {/* Calendar View */}
      {currentView === "calendar" && (
        <>
          <CalendarHeader /> {/* Days of the week */}
          <div className="calendar-grid">
            {daysOfMonth.map((day) => (
              <div
                key={day.date}
                className="calendar-item"
                onClick={() => handleDayClick(day)}
              >
                <p>
                  {day.weekday} {day.date}
                </p>
                <div className="post-placeholder">No posts yet</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Weekly View */}
      {currentView === "weekly" && (
        <div className="weekly-view">
          <h3>Weekly View - Under Construction</h3>
        </div>
      )}

      {/* List View */}
      {currentView === "list" && (
        <div className="list-view">
          <h3>List View - Under Construction</h3>
        </div>
      )}

      {/* Side Panel */}
      {selectedPost && (
        <div className="side-panel">
          <button className="close-btn" onClick={() => setSelectedPost(null)}>
            &times;
          </button>
          <h3>{selectedPost.title}</h3>
          <p>
            <strong>Day:</strong> {selectedPost.day}
          </p>
          <p>{selectedPost.description}</p>
        </div>
      )}

      {/* New Post Modal */}
      {isModalOpen && (
        <NewPostModal
          onClose={() => setModalOpen(false)}
          onSave={handleSavePost}
        />
      )}
    </div>
  );
};

export default CalendarView;
