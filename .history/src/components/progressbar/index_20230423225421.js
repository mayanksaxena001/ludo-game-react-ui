import React, { useCallback, useEffect, useState } from 'react';
import './progressbar.css';
const ProgressBar = (props) => {
    const { bgcolor, handleTimeOut, data } = props;
    const [progress, setProgress] = useState(0);
    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    const timerFunction = () => {
        if (progress < 100) setProgress((completed) => completed + 10);
    }

    const timeOut = () => setTimeout(() => {
        handleTimeOut();
    }, data.time_out * 1000);

    useEffect(() => {
        console.log('Progress ', progress);
    }, []);
    useEffect(() => {
        // console.log('inside progress bar use effect');
        const id = setInterval(timerFunction, 1000);
        const timeoutId = timeOut();
        return () => {
            clearInterval(id);
            clearTimeout(timeoutId);
        }

    }, []);

    return (
        <div className='progressbar' >
            <div style={fillerStyles}>
                <span className='labelStyles'>{`${progress}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
