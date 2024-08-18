import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h2>Welcome to The Rowing Weather App!</h2>
            <p>Select a location to view Rowing Conditions</p>
            <Link to="/weather">Go to Weather Page</Link>
        </div>
    );
}

export default HomePage;