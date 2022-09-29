import React, { useEffect, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import './Main.css'

const Main = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])
    return (
        <div className='activity-container'>
            <div className='task-container'>
                <h1 className='header'>Daily-Study-Tasks</h1>
                <p className='task-header'>Select Today's Study Tasks</p>
                <div className='tasks'>
                    {
                        tasks.map(task => <Tasks key={task.id} tasks = {task}></Tasks>)
                    }
                </div>
            </div>

            <div className='details-container'>
                <h1>Ahmed</h1>
            </div>
        </div>

    );
};

export default Main;