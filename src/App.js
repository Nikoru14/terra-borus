import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard'
import TreeInfo from './pages/TreeInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path='/TreeInfo' element={<TreeInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
