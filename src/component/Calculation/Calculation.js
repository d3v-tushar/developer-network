import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../Toast/Toast';


const Calculation = () => {
    return (
        <div className="mb-5">
            <h4 className="text-center mb-3">Activity Details</h4>
            <div className="form-outline">
                <h5 className='d-flex justify-content-between mx-3 bg-secondary bg-opacity-25 rounded p-3'><span>Practice Time</span><span className='text-muted' id='activity-time'>00</span></h5>
            </div>
            <div className="form-outline">
                <h5 className='d-flex justify-content-between mx-3 bg-secondary bg-opacity-25 rounded p-3'><span>Break Time</span> <span className='text-muted' id='break-time'>00</span></h5>
            </div>
            <hr className="my-4" />
              <Toast></Toast>
        </div>
    );
};

export default Calculation;