import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const navigate = useNavigate();

    const locations = [
        'Oslo',
        'Copenhagen',
        'New York'
      ];

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedLocation) {
            navigate(`/weather/${selectedLocation}`);
        }
    };

    return (
        <div className="container">
            <h2>Welcome to The Rowing Weather App!</h2>
            <p>Select a location to view Rowing Conditions</p>
            <select value={selectedLocation} onChange={handleLocationChange}>
                <option value="">
                    Select a location
                </option>
                {locations.map((location) => (
                    <option key={location} value={location}>
                        {location}
                    </option>
                ))}
            </select>
            <button onClick={handleSubmit} disabled={!selectedLocation}>
                View Weather
            </button>
        </div>
    );
}

export default HomePage;