import React, { useState, useEffect } from 'react';
import { getHalls, addHall } from '../services/hallService';

const HallList = () => {
    const [halls, setHalls] = useState([]);
    const [newHall, setNewHall] = useState({ name: '', capacity: 0, facilities: [] });

    useEffect(() => {
        loadHalls();
    }, []);

    const loadHalls = async () => {
        const response = await getHalls();
        setHalls(response.data);
    };

    const handleAddHall = async () => {
        await addHall(newHall);
        loadHalls();
    };

    return (
        <div>
            <h1>Halls</h1>
            <input type="text" placeholder="Name" onChange={(e) => setNewHall({ ...newHall, name: e.target.value })} />
            <input type="number" placeholder="Capacity" onChange={(e) => setNewHall({ ...newHall, capacity: parseInt(e.target.value) })} />
            <button onClick={handleAddHall}>Add Hall</button>
            <ul>
                {halls.map(hall => <li key={hall._id}>{hall.name} - {hall.capacity}</li>)}
            </ul>
        </div>
    );
};

export default HallList;