import React, { useState, useEffect } from 'react';
import { getTimeSlots, addTimeSlot } from '../services/timeSlotService';

const TimeSlotList = () => {
    const [timeSlots, setTimeSlots] = useState([]);
    const [newTimeSlot, setNewTimeSlot] = useState({ startTime: '', endTime: '', isAvailable: true });

    useEffect(() => {
        loadTimeSlots();
    }, []);

    const loadTimeSlots = async () => {
        const response = await getTimeSlots();
        setTimeSlots(response.data);
    };

    const handleAddTimeSlot = async () => {
        await addTimeSlot(newTimeSlot);
        loadTimeSlots();
    };

    return (
        <div>
            <h1>Time Slots</h1>
            <input type="datetime-local" onChange={(e) => setNewTimeSlot({ ...newTimeSlot, startTime: e.target.value })} />
            <input type="datetime-local" onChange={(e) => setNewTimeSlot({ ...newTimeSlot, endTime: e.target.value })} />
            <button onClick={handleAddTimeSlot}>Add Time Slot</button>
            <ul>
                {timeSlots.map(timeSlot => <li key={timeSlot._id}>{new Date(timeSlot.startTime).toLocaleString()} - {new Date(timeSlot.endTime).toLocaleString()}</li>)}
            </ul>
        </div>
    );
};

export default TimeSlotList;