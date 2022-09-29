import React, { useEffect, useState } from 'react';
import { addToDB, getStoredTime } from '../../utilities/fakedb';
import Person from '../Person-Details/Person';
import './Details.css';


const Details = ({studyTime}) => {
    
    const minutes = [5, 10, 15, 20];
    const [breakTime, setBreakTime] = useState(0);

    
    

    const addBreakTime = (time) => {
        const newBreakTime = time;
        setBreakTime(newBreakTime);
        addToDB(time);
    }

    return (
        
        <div className='details'>
            <Person></Person>
            <h4>Add a Break</h4>
            <div className='break-details'>
                {
                minutes.map(minute => <button key={minute} onClick={() => addBreakTime(minute)}  className='break-btn'>{minute}min</button>)
                }
            </div>
            <div className="study-details">
                <h4>Study Details</h4>
                <div className='study-time'>
                    <p>Study time</p>
                    <small>{studyTime} minutes</small>
                </div>
                <div className='break-time'>
                    <p>Break time</p>
                    <small>{breakTime} minutes</small>
                </div>
            </div>
            <button className='completed-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;