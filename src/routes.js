import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/weather" element={<WeatherPage/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;