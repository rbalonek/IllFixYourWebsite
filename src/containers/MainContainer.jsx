import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";  // Add Navigate to the imports
import Home from '../screens/Home';
import Services from '../screens/Services';
import FeatureTestScreen from '../screens/FeatureTestScreen';

export default function MainContainer() {
  return (
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/feature-test" element={<FeatureTestScreen />} />
      <Route path="/" element={<Home />} />
      
      {/* Catch-all route for 404s */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
