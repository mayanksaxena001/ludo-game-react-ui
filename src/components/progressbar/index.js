import React, { useCallback, useEffect, useState } from 'react';
import './progressbar.css';
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
    // const startInterval = () => setInterval(() => {
    //     if (progress < 100 && !running) {
    //         setProgress((prev) => prev + 10);
    //         setRunning(true);
    //     }
    //     else if (progress > 100 && running) {
    //         setProgress((prev) => prev - 10);
    //         setRunning(false);
    //     }
    // }, 1000);

    useEffect(() => {
        if (progress == 100) {
            setRunning(false);
            handleTimeOut();
        }
    }, [progress]);


    useEffect(() => { 
        console.log('progressbar use effect');
        // startInterval()
        const intervalId = setInterval(() => {
            if (progress < 100 && running) {
                setProgress((prev) => prev + 20);
                setRunning(true);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <progress className='progressbar'  value={progress} max={100} />
        // <div className='progressbar' style={{ color: bgcolor}}>
        //     <div style={fillerStyles}>
        //         <span className='labelStyles'>{`${progress}%`}</span>
        //     </div>
        // </div>
    );
};

export default ProgressBar;
