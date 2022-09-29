import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Tasks from '../Tasks/Tasks';
import './Main.css'

const Main = () => {
    
    const [tasks, setTasks] = useState([]);
    const [studyTime, setStudyTime] = useState(0)
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

    const addStudyTime = (time) => {
        const newStudyTime = time + studyTime;
        setStudyTime(newStudyTime)
    }
    return (
        <div className='activity-container'>
            <div className='task-container'>
                <h1 className='header'>Daily-Study-Tasks</h1>
                <p className='task-header'>Select Today's Study Tasks</p>
                <div className='tasks'>
                    {
                        tasks.map(task => <Tasks key={task.id} tasks = {task} addStudyTime={addStudyTime}></Tasks>)
                    }
                </div>
            </div>

            <div className='details-container'>
                <Details studyTime={studyTime}></Details>
            </div>
        </div>

    );
};

export default Main;