import axios from 'axios'

const API_KEY = '205bd8914a07b3322e3c6eb42018d343';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (location) => {
    try{
        const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};