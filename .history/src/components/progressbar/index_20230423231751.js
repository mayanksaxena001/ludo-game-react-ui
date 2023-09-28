import React, { useCallback, useEffect, useState } from 'react';
import './progressbar.css';
let interval = undefined;
const ProgressBar = (props) => {
    const { bgcolor, handleTimeOut, data } = props;
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    console.log('Progress ', progress);
    console.log('running ', running);
    useEffect(() => {
        if (running) {
            interval = setInterval(() => {
                setProgress((prev) => prev + 10);
            }, 1000);
        } else {
            clearInterval(interval);
        }
    }, [running]);

    useEffect(() => {
        if (progress === 100) {
            setRunning(false);
            clearInterval(interval);
        }
    }, [progress]);

    return (
        <div className='progressbar' >
            <div style={fillerStyles}>
                <span className='labelStyles'>{`${progress}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
