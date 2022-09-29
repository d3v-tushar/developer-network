import React from 'react';
import { totalDuration } from '../Utilities/Utlities';
import './Course.css'

const Course = (props) => {
    const {img, course, time, discription} = props.course;
    const addToList = (time) =>{
        totalDuration(time);
    }
    return (       
            <div className="card shadow p-2">
            <img src={img} className="card-img-top fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{course}</h5>
              <h6 className='text-danger'>Time Required: {time}</h6>
              <p className="card-text">{discription}</p>
            </div>
            <div className="card-footer">
            <button onClick={() => addToList(time)} className='btn btn-primary'>Add Activity</button>
            </div>
        </div>
    );
};

export default Course;