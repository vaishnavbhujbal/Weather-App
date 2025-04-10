
import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="w-[400px] mx-auto bg-blue-300 rounded-2xl shadow-2xl overflow-hidden p-6 my-4">
      <h2 className="text-2xl font-extrabold mb-2 text-center">{weather.name}</h2>
      <p className="text-gray-600 text-center capitalize text-base mb-2">{weather.weather[0].description}</p>
      <p className="text-4xl font-bold text-center my-2">{Math.round(weather.main.temp)}°C</p>
      <div className="flex justify-around mt-2 text-sm">
        <div className="text-center">
          <p className="text-gray-500">Humidity</p>
          <p className="font-semibold">{weather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Wind Speed</p>
          <p className="font-semibold">{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
