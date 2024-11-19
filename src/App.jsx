// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      {/* Header with  Integrated Navigation */}
      <Header />

      {/* Routes for the app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
