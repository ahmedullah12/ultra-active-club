import React, { useState } from 'react';
import Person from '../Person-Details/Person';
import './Details.css';


const Details = ({studyTime}) => {
    
    const minutes = [5, 10, 15, 20];
    
    return (
        
        <div className='details'>
            <Person></Person>
            <h4>Add a Break</h4>
            <div className='break-details'>
                {
                minutes.map(minute => <button  className='break-btn'>{minute}min</button>)
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
                    <small>100 minutes</small>
                </div>
            </div>
            <button className='completed-btn'>Activity Completed</button>
        </div>
    );
};

export default Details;