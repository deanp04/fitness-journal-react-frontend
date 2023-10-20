import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import LogWorkoutPage from './pages/LogWorkoutPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<LogWorkoutPage />} />
        <Route path="/posts/:id" element={<WorkoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
