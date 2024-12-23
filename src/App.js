import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import CalendarView from "./components/CalendarView";

function App() {
  const [view, setView] = useState("dashboard");

  return (
    <div>
      {/* Global Navigation Bar */}
      <nav className="global-navigation">
        <button onClick={() => setView("dashboard")}>🏠 Home</button>
        <button onClick={() => setView("calendar")}>📅 Calendar View</button>
        <button onClick={() => setView("weekly")}>🕒 Weekly View</button>
        <button onClick={() => setView("list")}>📋 List View</button>
      </nav>

      {/* Views */}
      {view === "dashboard" && <Dashboard onNavigate={setView} />}
      {view === "calendar" && <CalendarView />}
      {view === "weekly" && (
        <h2 className="page-placeholder">Weekly View - Coming Soon!</h2>
      )}
      {view === "list" && (
        <h2 className="page-placeholder">List View - Coming Soon!</h2>
      )}
    </div>
  );
}

export default App;
