import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather'; // URL, for fetching data

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${baseURL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric` // Send GET request from OpenWeatherAPI with custom params
    );
    return response.data; // return fetched data
  } 
  catch (error) {
    console.log(error);
    window.alert("Error while fetching data from APi", error); // Alarm us if we catch an error while fetching data
    return null;
  }
};
