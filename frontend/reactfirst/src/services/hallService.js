import axios from 'axios';

const API_URL = 'http://localhost:5000/halls';

export const getHalls = () => axios.get(API_URL);
export const addHall = (hall) => axios.post(`${API_URL}/add`, hall);