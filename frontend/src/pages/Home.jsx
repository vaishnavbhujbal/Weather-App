// src/pages/Home.jsx

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Forecast from '../components/Forecast';
import RecentSearches from '../components/RecentSearches';
import Map from '../components/Map';
import YouTubeVideos from '../components/YouTubeVideos';

function Home() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (searchLocation) => {
    try {
      const response = await axios.post('http://localhost:5000/api/weather', { location: searchLocation });
      const weatherData = response.data.weatherData;

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      const forecastData = forecastResponse.data.list.filter(day => day.dt_txt.includes('12:00:00'));

      setWeatherData(weatherData);
      setForecastData(forecastData.slice(0, 5));
      setLocation(searchLocation);
      setError('');
    } catch (err) {
      console.error('Error fetching weather or forecast:', err.message);
      setError('City not found. Please try again.');
      setWeatherData(null);
      setForecastData(null);
      setLocation('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-start p-6">
      
      

      
      <h1 className="text-4xl font-bold text-blue-800 mb-6 z-10">🌦️ Weather Explorer</h1>

      
      <div className="z-10 w-full flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      
      {error && (
        <div className="mt-4 text-red-600 font-semibold text-lg z-10">
          {error}
        </div>
      )}

      
      {location && weatherData && (
        <div className="mt-6 text-2xl text-gray-800 font-semibold z-10">
          Showing weather for: {location}
        </div>
      )}

      
      {weatherData && (
        <div className="mt-6 z-10">
          <WeatherCard weather={weatherData} />
        </div>
      )}

      
      {weatherData && weatherData.coord && (
        <div className="mt-6 w-full max-w-4xl z-10">
          <Map lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
        </div>
      )}

      
      {forecastData && (
        <div className="mt-10 w-full z-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">5-Day Forecast</h2>
          <Forecast forecast={forecastData} />
        </div>
      )}

      
      <div className="w-full z-10">
        <RecentSearches />
      </div>

      
      {location && (
        <div className="w-full z-10">
          <YouTubeVideos city={location} />
        </div>
      )}

      
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-2xl mt-10 text-center z-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">✨ PM Accelerator✨</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
        The Product Manager Accelerator Program is designed to support PM professionals through every stage of their careers. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
        Our Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavors.

        </p>
      </div>

      
      <div className="mt-8 text-center text-gray-600 text-l z-20  ">
        Made by <span className="font-bold">Vaishnav Bhujbal</span>
      </div>
    </div>
  );
}

export default Home;
