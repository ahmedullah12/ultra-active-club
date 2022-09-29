import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div className='questions'>
            <h1>Some Popular Questions</h1>
            <div className='question'>
                <h2>1. How Does React Work?</h2>
                
                <p><span>Ans: </span> It's a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React's simplicity. It's not a mega framework. It's not a full-stack solution that's going to handle everything from the database to real-time updates over web socket connections. We don't actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.</p>
            </div>
            <div className='question'>
                <h2>2. Difference Between Props and State?</h2>
                
                <p><span>Ans: </span> The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
            </div>
            <div className='question'>
                <h2>3. What is the use of useEffect beside data loading?</h2>
                
                <p><span>Ans: </span> The callback function we pass to the useEffect hook runs the side effects. React runs it on every render of a component by default. However, side effects can be expensive and performance-intensive to run on every render. We can control it using the dependency array argument we pass to the useEffect hook.</p>
            </div>
        </div>
    );
};

export default Questions;