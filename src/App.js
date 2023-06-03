import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';
import CowStory from './pages/cowStory';
import Invest from './pages/invest';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cow-story" element={<CowStory />} />
    <Route path="/invest" element={<Invest />} />
    <Route path="/fipme" element={<h1 className="text-center">fipme</h1>} />
    <Route
      path="/solutions"
      element={<h1 className="text-center">solutions</h1>}
    />
    <Route path="/moos" element={<h1 className="text-center">moos</h1>} />
  </Routes>
);
export default App;
