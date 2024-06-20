import React, { useState, useEffect } from 'react';
import { getCourses, addCourse } from '../services/courseService';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ name: '', priority: 0, numberOfStudents: 0 });

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        const response = await getCourses();
        setCourses(response.data);
    };

    const handleAddCourse = async () => {
        await addCourse(newCourse);
        loadCourses();
    };

    return (
        <div>
            <h1>Courses</h1>
            <input type="text" placeholder="Name" onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
            <input type="number" placeholder="Priority" onChange={(e) => setNewCourse({ ...newCourse, priority: parseInt(e.target.value) })} />
            <input type="number" placeholder="Number of Students" onChange={(e) => setNewCourse({ ...newCourse, numberOfStudents: parseInt(e.target.value) })} />
            <button onClick={handleAddCourse}>Add Course</button>
            <ul>
                {courses.map(course => <li key={course._id}>{course.name} - {course.priority}</li>)}
            </ul>
        </div>
    );
};

export default CourseList;