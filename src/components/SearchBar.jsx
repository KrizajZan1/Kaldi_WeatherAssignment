import React, { useState } from "react";
import '../styles/SearchBar.css'

const SearchBar = ({ onSearch }) => { 
  const [searchCity, setsearchCity] = useState("");

  const handleInputChange = (e) => {
    setsearchCity(e.target.value); // Update value in search input
  };

  const handleEnterKey = (e) => { // Function for searching with key Enter
    if (e.key === "Enter") {
      onSearch(searchCity);
      setsearchCity(""); 
    }
  };

  const handleSearchClick = () => { // Function for searching with Search button
    onSearch(searchCity);
    setsearchCity(""); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchCity}
        onChange={handleInputChange} // Updates value of input
        onKeyDown={handleEnterKey} // Adds search with key Enter
        placeholder="Enter city name:"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;