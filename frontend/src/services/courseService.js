import axios from 'axios';

const API_URL = 'http://localhost:5000/courses';

export const getCourses = () => axios.get(API_URL);
export const addCourse = (course) => axios.post(`${API_URL}/add`, course);
