import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../screens/Home';
import Services from '../screens/Services';
import FeatureTestScreen from '../screens/FeatureTestScreen';

export default function MainContainer() {
  return (
    <Routes>
    <Route path="/services" element={<Services />} />
      <Route path="/feature-test" element={<FeatureTestScreen />} />
    <Route path="/" element={<Home />} />
    </Routes>
  )
}
