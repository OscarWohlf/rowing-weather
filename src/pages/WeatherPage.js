import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';
import { useParams } from 'react-router-dom';

function WeatherPage() {
    const {location} = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeatherData(location);
                setWeatherData(data);
            } catch(error) {
                console.error('Failed to fetch weather data', error);
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, [location]);

    const formatTimeStamp = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        return date.toLocaleTimeString();
    }

    if (loading) {
        return <p>Loading weather data...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return(
        <div>
            <h2>Weather at Rowing Location</h2>
            {weatherData ? (
                <div>
                    <p>Location: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp} C</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Updated at: {formatTimeStamp(weatherData.dt)}</p>
                </div>
            ) : (
                <p>No Data Available</p>
            )}
        </div>
    );
}

export default WeatherPage;