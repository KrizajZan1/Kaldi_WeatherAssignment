import React from "react";
import '../styles/SearchHistory.css'

const SearchHistory = ({ history, onSelect, onClearHistory }) => {
  return (
    <div className="search-history">
      <h3>Search History: </h3>
      <ul>
        {history.map((city, index) => ( // Go through all history items and add li element to each one of them
          <li key={index} onClick={() => onSelect(city)}> {/* each item needs unique index otherwise we get error */}
            {city}
          </li>
        ))}
      </ul>
      <button onClick={onClearHistory}>Clear History</button> 
    </div>
  );
};

export default SearchHistory;
