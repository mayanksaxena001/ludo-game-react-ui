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
        if (running && progress === 100) {
            console.log('Progress ', progress);
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
