import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav>
        <Link to="/halls">Halls</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/timeslots">Time Slots</Link>
    </nav>
);

export default Navbar;