import React from 'react';

const Calculation = () => {
    return (
        <div className="mb-5">
            <h4 className="text-uppercase mb-3">Exercise Details</h4>
            <div className="form-outline">
                <h5 className='d-flex justify-content-between mx-3 bg-secondary bg-opacity-25 rounded p-3'><span>Exercise time</span><span className='text-muted' id='activity-time'>00</span></h5>
            </div>
            <div className="form-outline">
                <h5 className='d-flex justify-content-between mx-3 bg-secondary bg-opacity-25 rounded p-3'><span>Break time</span> <span className='text-muted' id='break-time'>00</span></h5>
            </div>
            <hr className="my-4" />
              <button type="button" className="btn btn-dark btn-block btn-lg">Activity Completed</button>
        </div>
    );
};

export default Calculation;