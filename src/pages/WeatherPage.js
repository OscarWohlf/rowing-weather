import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWeatherData } from '../services/weatherService';
import './WeatherPage.css';

function WeatherPage() {
  const { location } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data.');
        console.error('Error fetching weather data:', err);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [location]);

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  const handleBackClick = () => {
    navigate('/');
  };

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h2>Weather at {location}</h2>
        <button className="btn btn-secondary" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i> Back to Homepage
        </button>
      </div>
      {weatherData ? (
        <div className="weather-info">
          <p><strong>Location:</strong> {weatherData.name}</p>
          <p><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
          <p><strong>Updated At:</strong> {formatTime(weatherData.dt)}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default WeatherPage;
