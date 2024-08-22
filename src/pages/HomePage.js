import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'
import {locationMapping} from '../locationMapping';

function HomePage() {
    const [selectedLake, setSelectedLake] = useState('');
    const navigate = useNavigate();

    const lakes = Object.keys(locationMapping);

    const handleLocationChange = (event) => {
        setSelectedLake(event.target.value);
    };

    const handleSubmit = () => {
        const cityName = locationMapping[selectedLake]
        if (cityName) {
            navigate(`/weather/${cityName}`);
        }
    };

    return (
        <div className="container">
            <h2>Welcome to The Rowing Weather App!</h2>
            <p>Select a location to view Rowing Conditions</p>
            <select value={selectedLake} onChange={handleLocationChange}>
                <option value="">
                    Select a lake
                </option>
                {lakes.map((lake) => (
                    <option key={lake} value={lake}>
                        {lake}
                    </option>
                ))}
            </select>
            <button onClick={handleSubmit} disabled={!selectedLake}>
                View Weather
            </button>
        </div>
    );
}

export default HomePage;