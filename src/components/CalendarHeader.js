import React from "react";

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarHeader() {
  return (
    <div className="calendar-header">
      {DAYS_OF_WEEK.map((day) => (
        <div key={day} className="calendar-header-item">
          {day}
        </div>
      ))}
    </div>
  );
}

export default CalendarHeader;
