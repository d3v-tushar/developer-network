import React from 'react';
import Calculation from '../Calculation/Calculation';
import Profile from '../Calculation/Profile/Profile';
import { breakTime } from '../Utilities/Utlities';
import './User.css';
const User = () => {
    return (
        <div className='user-container'>
            <div className="col-lg-12 bg-grey">
                <div className="p-3 row">
                <Profile></Profile>
                    <hr className="my-4" />

                    <div className="mx-2 rounded">
                        <div className="bg-secondary bg-opacity-25 rounded row mx-3 p-4">
                            <div className="col-lg-4 align-items-center">
                                <div className="d-flex align-items-bottom p-2">
                                    <h3>65</h3>
                                    <h5>KG</h5>

                                </div>
                                <h5>Weight</h5>

                            </div>
                            <div className="col-lg-4 align-items-center">
                                <div className="d-flex align-items-bottom p-2">
                                    <h3>5.8</h3>
                                    <h5>FT</h5>

                                </div>
                                <h5>Height</h5>

                            </div>
                            <div className="col-lg-4 align-items-center">
                                <div className="d-flex align-items-bottom p-2">
                                    <h3>25</h3>
                                    <h5>Yr</h5>

                                </div>
                                <h5>Age</h5>

                            </div>

                        </div>

                    </div>
                    <hr className="my-4" />

                    <div className="col-lg-12 mx-auto rounded">
                        <h4>Break Time</h4>
                        <div className='bg-secondary bg-opacity-25 rounded mx-3 p-3'>
                        <button onClick={() => breakTime('10')}
                                    className="break-btn rounded-circle bg-light text-dark mx-2">10m</button>


                        <button onClick={() => breakTime('15')}
                                    className="break-btn rounded-circle bg-light text-dark mx-2">15m</button>


                        <button onClick={() => breakTime('30')}
                                    className="break-btn rounded-circle bg-light text-dark mx-2">30m</button>


                        <button onClick={() => breakTime('45')}
                                    className="break-btn rounded-circle bg-light text-dark mx-2">45m</button>


                        <button onClick={() => breakTime('60')}
                                    className="break-btn rounded-circle bg-light text-dark mx-2">60m</button>
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