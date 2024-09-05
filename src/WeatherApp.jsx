import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import SearchHistory from './SearchHistory';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const apiKey = 'd1c324ebf13fef88b21ef4dc09370b64';  // OpenWeatherMap API ključ

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory'));
    if (savedHistory) {
      setHistory(savedHistory);
    }
  }, []);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');

      // Posodobitev zgodovine iskanj
      const updatedHistory = [city, ...history.filter(item => item !== city)].slice(0, 5);
      setHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      setWeather(null);
      setError('Mesto ni bilo najdeno ali je prišlo do napake.');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  const handleHistoryClick = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <div className="weather-app">
      <div className="search-section">
        <div className="search-container">
          <h1>Vremenska aplikacija</h1>
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              placeholder="Vnesi ime mesta"
            />
            <button type="submit">Išči</button>
          </form>
          {error && <p className="error">{error}</p>}
          <WeatherDisplay weather={weather} />
        </div>
        <div className="history-container">
          <button onClick={clearHistory} className="clear-history">Izbriši zgodovino</button>
          <SearchHistory history={history} onClick={handleHistoryClick} />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
