import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Qna from '../Qna/Qna';
import User from '../User/User';
import './Main.css'

const Main = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch('https://dev-network.free.beeceptor.com')
        .then(Response => Response.json())
        .then(data => setCourses(data))
    },[])
    //console.log(courses);
    return (
        <div>
            <div className='main-body'>
                    <div className='activity-container'>
                        <h1>Developer Network</h1>
                        <h2>Select Today's Practice Module</h2>
                        <div className='courses-container'>
                        {
                            courses.map(course => <Course course={course} key={course.time}></Course>)
                        }
                        </div>
                    </div>
                <div>
                    <User></User>
                </div>
            </div>
           <div className='container'>
           <Qna></Qna>
           </div>
        </div>
    );
};

export default Main;