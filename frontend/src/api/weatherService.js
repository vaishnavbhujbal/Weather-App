import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (location) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: location,
      units: 'metric',
      appid: API_KEY,
    },
  });
  return response.data;
};

export const fetchForecast = async (location) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: location,
      units: 'metric',
      appid: API_KEY,
    },
  });

  const fullForecastList = response.data.list;


  const dailyForecast = fullForecastList.filter(forecast =>
    forecast.dt_txt.includes('12:00:00')
  );

  return dailyForecast.slice(0, 5); 
};
