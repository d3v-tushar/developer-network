import React from 'react';

const Profile = () => {
    return (
            <div className='d-flex align-items-baseline'>
                <div className="col-lg-3">
                    <img src="https://i.ibb.co/Smf6CpS/tushar-picture.png"
                            alt=""
                            className="img-fluid rounded-circle" />
                </div>
                    <div className='mx-3'>
                        <h4>Ornob H. Tushar</h4>
                        <h5 className="text-secondary">Dhaka, Bangladesh</h5>
                    </div>
            </div>
    );
};

export default Profile;