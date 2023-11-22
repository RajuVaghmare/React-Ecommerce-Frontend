import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Use Routes to wrap your Route components */}
        <Routes>
          {/* Route to the Home component */}
          <Route path="/" element={<Home />} />
          {/* Add more routes for other pages/components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
