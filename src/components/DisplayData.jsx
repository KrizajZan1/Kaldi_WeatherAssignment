import React from 'react';

const DisplayData = ({ weatherData }) => { 
  if (!weatherData) return null; 

  const { main, weather, name } = weatherData; // Destructuring of weatherData into 3 values
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // get image from OpenWeatherAPI

  return (
    <div className="weather-data">
      <h2>Weather data for city: {name}</h2>
      <img src={iconUrl} alt="Weather icon" />
      <p>Temperature: {main.temp} °C</p>
      <p>Feels like: {main.feels_like} °C</p>
      <p>Min. temperature: {main.temp_min} °C</p>
      <p>Max. temperature: {main.temp_max} °C</p>
      <p>Humidity: {main.humidity} %</p>
    </div>
  );
};

export default DisplayData;