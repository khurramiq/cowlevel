import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';
import CowStory from './pages/cowStory';
import Invest from './pages/invest';
import FipMe from './pages/fipme';
import Solutions from './pages/solutions';
import Moos from './pages/moos';
import TextPage from './pages/textPage';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cow-story" element={<CowStory />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/test-page" element={<TextPage />} />
      <Route path="/fipme" element={<FipMe />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/moos" element={<Moos />} />
      <Route path="/admin-area" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
