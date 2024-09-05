import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import WeatherApp from './WeatherApp';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>
);
