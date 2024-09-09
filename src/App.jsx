import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import DisplayData from "./components/DisplayData";
import SearchHistory from "./components/SearchHistory";
import { getWeatherData } from "./Services/GetData";
import './styles/App.css'; 

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null); // Holds weather data for the current city
  const [recentSearches, setRecentSearches] = useState([]); // Holds list of recently searched cities

  useEffect(() => {
    // Load recent searches from localStorage on initial render. If no data in localStorage return empty array []
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setRecentSearches(storedHistory);
  }, []);

  const performSearch = async (city) => {
    if (!city) return;

    // Fetch weather data with function defined in GetData.jsx file
    const data = await getWeatherData(city);
    if (data) {
      setCurrentWeather(data); 
      refreshSearchHistory(city);
    }
  };

  const searchSelectedCity = (city) => {
    performSearch(city); 
  };

  const clearSearchHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem("searchHistory");
  };

  const refreshSearchHistory = (city) => {
    setRecentSearches((prevHistory) => {
      const filteredHistory = prevHistory.filter(item => item !== city);
      const updatedHistory = [city, ...filteredHistory.slice(0, 4)]; // Move cist at the top of the list and keep only the most recent 5 searches
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={performSearch} />
      {currentWeather && <DisplayData weatherData={currentWeather} />}
      <SearchHistory 
        history={recentSearches} 
        onSelect={searchSelectedCity} 
        onClearHistory={clearSearchHistory} 
      />
    </div>
  );
};

export default App;
