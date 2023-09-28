import React, { useCallback, useEffect, useState } from 'react';
import './progressbar.css';
let interval = undefined;
const ProgressBar = (props) => {
    const { bgcolor, handleTimeOut, data } = props;
    const [running, setRunning] = useState(true);
    const [progress, setProgress] = useState(0);
    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    useEffect(() => {
        if (running) {
            interval = setInterval(() => {
                setProgress((prev) => prev + 1);
            }, 100);
        } else {
            clearInterval(interval);
        }
    }, [running]);
    
    useEffect(() => {
        console.log('Progress ', progress);
        if (progress === 100) {
            setRunning(false);
            clearInterval(interval);
            handleTimeOut();
        }
    }, [progress]);


    const timeOut = () => setTimeout(() => {
        handleTimeOut();
    }, data.time_out * 1000);

    useEffect(() => {
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
