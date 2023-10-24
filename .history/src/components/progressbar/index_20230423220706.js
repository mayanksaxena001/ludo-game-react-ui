import React, { useCallback, useEffect, useState } from 'react';
import './progressbar.css';
const ProgressBar = (props) => {
    const { bgcolor, handleTimeOut, data } = props;
    const [completed, setCompleted] = useState(0);
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    const timerFunction = () => {
        setCompleted((completed) => completed + 10);
        console.log('Progress ', completed);
    }

    const timeOut = () => setTimeout(() => {
        setCompleted(0);
        handleTimeOut();
    }, data.time_out * 1000);


    useEffect(() => {
        // console.log('inside progress bar use effect');
        if (completed < 100) {
            const id = setInterval(timerFunction, 1000);
            const timeoutId = timeOut();
            return () => {
                clearInterval(id);
                clearTimeout(timeoutId);
            }
        }

    }, []);

    return (
        <div className='progressbar' >
            <div style={fillerStyles}>
                <span className='labelStyles'>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;