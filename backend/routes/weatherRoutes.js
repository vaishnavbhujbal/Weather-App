
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Weather = require('../models/Weather');


router.post('/', async (req, res) => {
  try {
    const { location } = req.body;

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: location,
        units: 'metric',
        appid: process.env.OPENWEATHER_API_KEY,
      },
    });

    const weatherData = response.data;

    const newWeather = new Weather({
      city: weatherData.name,
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    });

    await newWeather.save();
    console.log('Weather data saved to MongoDB');

    res.json({ success: true, weatherData });
  } catch (error) {
    console.error('Error saving weather data:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch or save weather data' });
  }
});

// READ all saved weather searches
router.get('/', async (req, res) => {
  try {
    const weathers = await Weather.find().sort({ date: -1 }); // Newest first
    res.json({ success: true, weathers });
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch weather data' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { city } = req.body;
    const updatedWeather = await Weather.findByIdAndUpdate(
      req.params.id,
      { city },
      { new: true }
    );
    res.json({ success: true, updatedWeather });
  } catch (error) {
    console.error('Error updating weather data:', error.message);
    res.status(500).json({ success: false, message: 'Failed to update weather data' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Weather.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Weather data deleted' });
  } catch (error) {
    console.error('Error deleting weather data:', error.message);
    res.status(500).json({ success: false, message: 'Failed to delete weather data' });
  }
});




router.get('/export', async (req, res) => {
    try {
      const weathers = await Weather.find();
      res.setHeader('Content-Disposition', 'attachment; filename=weather-data.json');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(weathers, null, 2));
    } catch (error) {
      console.error('Error exporting weather data:', error.message);
      res.status(500).json({ success: false, message: 'Failed to export weather data' });
    }
});
  
module.exports = router;
  


