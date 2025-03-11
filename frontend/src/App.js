import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ActivityList from './components/ActivityList';
import ActivityForm from './components/ActivityForm';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activities" element={<CalendarView />} />
        <Route path="/create-activity" element={<ActivityForm />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
