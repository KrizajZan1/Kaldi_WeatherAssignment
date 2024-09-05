import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p>Vnesite ime mesta za prikaz vremena.</p>;
  }

  // Pridobivanje URL za ikono iz podatkov o vremenu
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  return (
    <div className="weather-info">
      <h2>Vreme za {weather.name}, {weather.sys.country}</h2>
      <img src={iconUrl} alt={weather.weather[0].description} className="weather-icon" />
      <p>Temperatura: {weather.main.temp}°C</p>
      <p>Občutek: {weather.main.feels_like}°C</p>
      <p>Najnižja temp: {weather.main.temp_min}°C</p>
      <p>Najvišja temp: {weather.main.temp_max}°C</p>
      <p>Vlažnost: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
