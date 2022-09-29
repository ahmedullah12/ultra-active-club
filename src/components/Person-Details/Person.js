import React from 'react';
import './Person.css';
import MyImage from '../../image/ian-dooley-d1UPkiFd04A-unsplash.jpg';

const Person = () => {
    return (
        <div>
            <div className='person-details'>
                <div className='name-details'>
                    <img src={MyImage} alt="" />
                    <div className='location'>
                        <h4>Ahmed Ullah</h4>
                        <p>Mirpur 1, Dhaka</p>
                    </div>
                </div>
                <div className='body-details'>
                    <p><span>68</span> kg</p>
                    <p><span>6.1</span></p>
                    <p><span>20</span>yrs</p>
                    <p>Weight</p>
                    <p>Height</p>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Person;