import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../screens/About';
import Home from '../screens/Home';
import Services from '../screens/Services';
import FeatureTestScreen from '../screens/FeatureTestScreen';

export default function MainContainer() {
  return (
    <Routes>
    <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/feature-test" element={<FeatureTestScreen />} />
    <Route path="/" element={<Home />} />
    </Routes>
  )
}
