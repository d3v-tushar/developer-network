import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => toast.success('Congratulation! You have made it', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    return (
        <div>
            <button type="button" onClick={notify} className='btn btn-primary btn-lg' id="liveToastBtn">Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;