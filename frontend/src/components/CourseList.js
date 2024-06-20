import React, { useState, useEffect } from 'react';
import { getCourses, addCourse } from '../services/courseService';
import { getHalls } from '../services/hallService';
import { getTimeSlots } from '../services/timeSlotService';
import './CourseList.css';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ name: '', hallId: '', timeSlotId: '' });
    const [halls, setHalls] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        loadCourses();
        loadHalls();
        loadTimeSlots();
    }, []);

    const loadCourses = async () => {
        const response = await getCourses();
        setCourses(response.data);
    };

    const loadHalls = async () => {
        const response = await getHalls();
        setHalls(response.data);
    };

    const loadTimeSlots = async () => {
        const response = await getTimeSlots();
        setTimeSlots(response.data);
    };

    const handleAddCourse = async () => {
        await addCourse(newCourse);
        loadCourses();
        setNewCourse({ name: '', hallId: '', timeSlotId: '' }); // Reset form fields after adding course
    };

    return (
        <div className="container">
            <h1>Courses</h1>
            <input type="text" placeholder="Name" value={newCourse.name} onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
            <div>
                <label>Select Hall:</label>
                <select value={newCourse.hallId} onChange={(e) => setNewCourse({ ...newCourse, hallId: e.target.value })}>
                    <option value="">Select a Hall</option>
                    {halls.map(hall => (
                        <option key={hall._id} value={hall._id}>{hall.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Select Time Slot:</label>
                <select value={newCourse.timeSlotId} onChange={(e) => setNewCourse({ ...newCourse, timeSlotId: e.target.value })}>
                    <option value="">Select a Time Slot</option>
                    {timeSlots.map(timeSlot => (
                        <option key={timeSlot._id} value={timeSlot._id}>{new Date(timeSlot.startTime).toLocaleString()} - {new Date(timeSlot.endTime).toLocaleString()}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleAddCourse}>Add Course</button>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        {course.name} - Hall: {halls.find(hall => hall._id === course.hallId)?.name || 'Not Assigned'} - Time Slot: {timeSlots.find(slot => slot._id === course.timeSlotId) ? `${new Date(timeSlots.find(slot => slot._id === course.timeSlotId).startTime).toLocaleString()} - ${new Date(timeSlots.find(slot => slot._id === course.timeSlotId).endTime).toLocaleString()}` : 'Not Assigned'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
