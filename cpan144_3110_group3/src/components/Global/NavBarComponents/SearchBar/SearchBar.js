import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "./SearchBar.css";

const SearchBar = ({ onToggle, isActive }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/generate?search=${encodeURIComponent(searchTerm)}`); // Use navigate for redirection
  };

  const handleFocus = () => {
    onToggle(); // Toggle from navbar
  };

  const handleBlur = () => {
    onToggle(); // Toggle from navbar
  };

  return (
    <div className={`search-bar-container ${isActive ? "active" : ""}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
};

export default SearchBar;
