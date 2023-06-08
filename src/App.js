import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';
import CowStory from './pages/cowStory';
import Invest from './pages/invest';
import FipMe from './pages/fipme';
import Solutions from './pages/solutions';
import Moos from './pages/moos';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cow-story" element={<CowStory />} />
    <Route path="/invest" element={<Invest />} />
    <Route path="/fipme" element={<FipMe />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/moos" element={<Moos />} />
  </Routes>
);
export default App;
