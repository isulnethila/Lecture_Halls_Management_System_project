import axios from 'axios';

const API_URL = 'http://localhost:5000/timeslots';

export const getTimeSlots = () => axios.get(API_URL);
export const addTimeSlot = (timeSlot) => axios.post(`${API_URL}/add`, timeSlot);