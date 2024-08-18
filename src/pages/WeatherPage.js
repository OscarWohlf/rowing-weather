import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../services/weatherService';

function WeatherPage() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeatherData('London');
                setWeatherData(data);
            } catch(error) {
                console.error('Failed to fetch weather data', error);
            }
        };

        getWeather();
    }, []);

    return(
        <div>
            <h2>Weather at Rowing Location</h2>
            {weatherData ? (
                <div>
                    <p>Location: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp} C</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            ) : (
                <p>Loading Weather Data...</p>
            )}
        </div>
    );
}

export default WeatherPage;