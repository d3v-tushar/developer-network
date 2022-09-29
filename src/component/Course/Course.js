import React from 'react';
import { totalDuration } from '../Utilities/Utlities';

const Course = (props) => {
    const {img, course, time, discription} = props.course;
    const addToList = (time) =>{
        totalDuration(time);
    }
    return (
            <div className='card'>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{course}</h5>
                        <p className="card-text">{discription}</p>
                        <p>Time: {time}</p>
                        <button onClick={() => addToList(time)} className='btn btn-primary'>Add Activity</button>
                    </div>
            </div>
    );
};

export default Course;