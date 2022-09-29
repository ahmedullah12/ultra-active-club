import React from 'react';
import './Tasks.css'

const Tasks = ({tasks}) => {
    console.log(tasks)
    const {image, name, time} = tasks;
    return (
        <div className='task'>
            <img src={image} alt="" />
            <h3>Subject Name: {name}</h3>
            
            <p>Time Required: <span>{time} minutes</span></p>
            <button>Add to list</button>
        </div>
    );
};

export default Tasks;