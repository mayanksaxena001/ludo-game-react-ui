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
    const startInterval = () => setInterval(() => {
        if (progress < 100 && !running) {
            setProgress((prev) => prev + 10);
            setRunning(true);
        }
        else if (progress > 100 && running) {
            setProgress((prev) => prev - 10);
            setRunning(false);
        }
    }, 1000);

    useEffect(() => { startInterval() }, []);
    useEffect(() => {
        if (!running) {
            clearInterval();
        }
    }, [running]);

    useEffect(() => {
        if (progress == 100) {
            setRunning(false);
            clearInterval(interval);
            handleTimeOut();
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
