import React, { useEffect } from 'react';
import Calculation from '../Calculation/Calculation';
import Profile from '../Calculation/Profile/Profile';
import { BreakTimeLS, DisplayBreakTimeFromLS } from '../Utilities/Utlities';
import './User.css';
const User = () => {
useEffect(()=>{
     DisplayBreakTimeFromLS()
},[])

    return (
        <div className='user-container shadow-sm'>
            <div className="col-lg-12 bg-grey">
                <div className="p-3 row">
                <Profile></Profile>
                    <hr className="my-4" />
                    <h4 className='text-center'>Progress</h4>
                <div className='skills'>
                    <h6>HTML</h6>
                    <div className="progress">
                        <div className="progress-bar bar-style-html bg-danger" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='skills'>
                    <h6>CSS3</h6>
                    <div className="progress">
                        <div className="progress-bar bar-style-css bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='skills'>
                    <h6>BOOTSTRAP</h6>
                    <div className="progress">
                        <div className="progress-bar bar-style-bootstrap bg-success" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='skills'>
                    <h6>TAILWIND</h6>
                    <div className="progress">
                        <div className="progress-bar bar-style-tailwind" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='skills'>
                    <h6>JAVASCRIPT</h6>
                    <div className="progress">
                        <div className="progress-bar bar-style-javascript bg-warning" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='skills'>
                    <h6>REACT JS</h6>
                    <div className="progress">
                        <div className="progress-bar bar-style-react bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                    <hr className="my-4" />

                    <div className="col-lg-12 mx-auto rounded">
                        <h4 className='text-center'>Break Duration</h4>
                        <div className='bg-secondary bg-opacity-25 rounded mx-3 p-3'>
                        <button id='btn-10' onClick={() => BreakTimeLS('10')}
                                    className="break-btn btn btn-outline-secondary rounded-circle bg-light text-dark mx-2">10m</button>


                        <button onClick={() => BreakTimeLS('15')}
                                    className="break-btn btn btn-outline-secondary rounded-circle bg-light text-dark mx-2">15m</button>


                        <button onClick={() => BreakTimeLS('30')}
                                    className="break-btn btn btn-outline-secondary rounded-circle bg-light text-dark mx-2">30m</button>


                        <button onClick={() => BreakTimeLS('45')}
                                    className="break-btn btn btn-outline-secondary rounded-circle bg-light text-dark mx-2">45m</button>


                        <button onClick={() => BreakTimeLS('60')}
                                    className="break-btn btn btn-outline-secondary rounded-circle bg-light text-dark mx-2">60m</button>
                    </div>
                    <hr className="my-4" />
                <Calculation></Calculation>
                </div>
            </div>
            </div>
        </div>
    );
};

export default User;