import React from "react";
import { NavLink } from "react-router-dom";
import { Calendar, List, Clock, PlusCircle } from "lucide-react";

const Header = ({ onNewPost }) => {
  return (
    <header className="bg-[#b48f8f] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Social Media Calendar</h1>

        <nav className="flex items-center space-x-6">
          {/* Calendar View */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center space-x-2 text-white/90 hover:text-white ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            <Calendar size={18} />
            <span>Calendar</span>
          </NavLink>

          {/* List View */}
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-white/90 hover:text-white ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            <List size={18} />
            <span>List</span>
          </NavLink>

          {/* Weekly View */}
          <NavLink
            to="/weekly"
            className={({ isActive }) =>
              `flex items-center space-x-2 text-white/90 hover:text-white ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            <Clock size={18} />
            <span>Weekly</span>
          </NavLink>

          {/* New Post Button */}
          <button
            onClick={onNewPost}
            className="flex items-center space-x-2 bg-white text-[#b48f8f] px-4 py-2 rounded-md hover:bg-white/90 transition-colors"
          >
            <PlusCircle size={18} />
            <span>New Post</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
