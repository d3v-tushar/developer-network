import React from 'react';

const Profile = () => {
    return (
            <div className='d-flex align-center'>
                <div className="col-lg-3">
                    <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                            className="img-fluid rounded-circle" />
                </div>
                    <div>
                        <h5>Ornob H. Tushar</h5>
                        <h5 className="text-secondary">Dhaka, Bangladesh</h5>
                    </div>
            </div>
    );
};

export default Profile;