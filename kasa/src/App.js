import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Logement from './components/Logement';
import ErrorPage from './components/ErrorPage';

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

export default App;