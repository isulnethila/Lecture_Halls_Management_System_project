import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HallList from './components/HallList';
import CourseList from './components/CourseList';
import TimeSlotList from './components/TimeSlotList';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/halls" element={<HallList />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/timeslots" element={<TimeSlotList />} />
        </Routes>
    </Router>
);

export default App;
