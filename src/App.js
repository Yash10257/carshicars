import React from 'react';
import Navbar from './component/Navbar';
import CarsItems from './component/CarsItems';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<CarsItems />} />
            <Route path="/page/:page" element={<CarsItems />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


