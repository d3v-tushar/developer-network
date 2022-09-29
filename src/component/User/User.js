import React from 'react';
import { breakTime } from '../Utilities/Utlities';
import './User.css';
const User = () => {
    return (
        <div className='user-container'>
            <div className="col-lg-12 bg-grey">
                <div className="p-3 row">
                <div className='d-flex align-center'>
                <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                            className="img-fluid rounded-circle" />
                    </div>
                    <div>
                        <h5>Ornob Hasan Tushar</h5>
                        <h5 className="text-secondary">Dhaka, Bangladesh</h5>
                    </div>
                </div>
                    <hr className="my-4" />

                    <div className="col-lg-12 m-1 rounded">
                        <div className="bg-light row">
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
                        <h5>Break Time</h5>
                        <div className="p-1 row">
                            <div className="col-lg-2 align-items-center ">


                                <button onClick={() => breakTime('10')}
                                    className="break-btn rounded-circle bg-light text-dark">10m</button>

                            </div>
                            <div className="col-lg-2 align-items-center ">


                                <button onClick={() => breakTime('15')}
                                    className="break-btn rounded-circle bg-light text-dark">15m</button>

                            </div>
                            <div className="col-lg-2 align-items-center ">


                                <button onClick={() => breakTime('30')}
                                    className="break-btn rounded-circle bg-light text-dark">30m</button>

                            </div>
                            <div className="col-lg-2 align-items-center ">


                                <button onClick={() => breakTime('45')}
                                    className="break-btn rounded-circle bg-light text-dark">45m</button>

                            </div>
                            <div className="col-lg-2 align-items-center ">


                                <button onClick={() => breakTime('60')}
                                    className="break-btn rounded-circle bg-light text-dark">60m</button>

                            </div>



                        </div>

                    </div>
                    <hr className="my-4" />
                    <div className="mb-5">
                    <h2 className="text-uppercase mb-3">Exercise Details</h2>
                        <div className="form-outline">
                            <h3>Exercise time <span id='activity-time'>200</span></h3>
                        </div>
                        <div className="form-outline">
                            <h3>Break time <span id='break-time'>00</span></h3>
                        </div>
                    </div>

                    <hr className="my-4" />
                    <button type="button" className="btn btn-dark btn-block btn-lg">Activity Completed</button>

                </div>
            </div>
        </div>
    );
};

export default User;