# 🌦️ Weather Explorer App

### A full-stack weather application where users can:

- 🔍 Search for current weather by city
- 🗓️ View a 5-day weather forecast
- 📍 See the city location on a Google Map
- 🎥 Watch top YouTube videos about the city
- 📝 Save recent searches to MongoDB
- ✏️ Edit/Delete recent searches full CRUD operations
- 📄 Download search history as a JSON file

Built using **React**, **Node.js**, **Express**, **MongoDB Atlas**, **OpenWeatherMap API**, **Google Maps API**, and **YouTube Data API**.

---

## 🚀 Tech Stack

| Layer | Technologies Used |
|:---|:---|
| Frontend | React.js, TailwindCSS, Axios |
| Backend | Node.js, Express.js, Mongoose |
| Database | MongoDB Atlas |
| APIs | OpenWeatherMap API, Google Maps API, YouTube Data API |
| Libraries | @react-google-maps/api, dotenv, cors, body-parser |

---

## 📦 Setup Requirements

- Node.js and npm installed
- MongoDB Atlas account free cluster
- Google Cloud Platform account for Maps & YouTube API keys
- OpenWeatherMap API account
- Basic knowledge of React and Express

---

## 📥 Installation Steps

### 1. Clone the Project

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```


## Setup Backend

```bash
cd backend
npm install
```


## Create a .env file inside backend/ with:

- MONGO_URI=your_mongodb_connection_string
- OPENWEATHER_API_KEY=your_openweathermap_api_key


## Start Backend Server 

```bash
npm start
```
## Setup Frontend

```bash
cd frontend 
npm install
```

## Create a .env file inside frontend/ with:
- REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
- REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
- REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key


## Start Frontend Server 

```bash
npm start
```

## Your app will start running and you will be able to explore the weather of the cities that you search for