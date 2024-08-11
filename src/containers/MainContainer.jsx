import React from 'react'
import { Routes, Route } from "react-router-dom";
// import About from '../screens/About';
// import Home from '../screens/Home';
// import Services from '../screens/Services';
// import FeatureTestScreen from '../screens/FeatureTestScreen';
import NewHome from '../screens/NewHome';

export default function MainContainer() {
  return (
    <Routes>
    <Route path="/" element={<NewHome />} />
    </Routes>
  )
}
