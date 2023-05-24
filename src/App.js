import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/cow-story"
      element={<h1 className="text-center">cow-story</h1>}
    />
    <Route path="/invest" element={<h1 className="text-center">invest</h1>} />
    <Route path="/fipme" element={<h1 className="text-center">fipme</h1>} />
    <Route
      path="/solutions"
      element={<h1 className="text-center">solutions</h1>}
    />
    <Route path="/moos" element={<h1 className="text-center">moos</h1>} />
  </Routes>
);
export default App;
