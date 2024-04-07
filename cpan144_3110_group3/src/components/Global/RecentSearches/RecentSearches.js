import React from "react";
import { Link } from "react-router-dom";
import "./RecentSearches.css";

const RecentSearches = ({ searches }) => {
  if (!searches.length) {
    return <div className="recent-searches">No recent searches</div>;
  }

  return (
    <div className="recent-searches">
      <h2>Recent Searches</h2>
      <ul className="search-list">
        {searches.map((search, index) => (
          <li key={index}>
            <Link to={`/search?query=${encodeURIComponent(search)}`}>
              {search}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
