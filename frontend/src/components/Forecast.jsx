

import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
      {forecast.map((day, idx) => (
        <div
          key={idx}
          className="bg-blue-200 p-4 rounded-2xl shadow-2xl text-center w-[160px] mx-auto"
        >
          <h3 className="font-bold text-md mb-2">{new Date(day.dt_txt).toLocaleDateString()}</h3>

          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
            className="mx-auto w-12 h-12 mb-2"
          />

          <p className="text-xl font-bold">{Math.round(day.main.temp)}°C</p>
          <p className="text-xs capitalize mb-2">{day.weather[0].description}</p>

          
          <div className="flex flex-col gap-1 text-xs mt-2">
            <p>Humidity: {day.main.humidity}%</p>
            <p>Wind: {day.wind.speed} m/s</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
