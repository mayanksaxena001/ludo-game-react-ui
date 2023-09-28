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
            setProgress((prev) => prev + 10);
          }, 10);
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


    const timeOut = () => setTimeout(() => {
        handleTimeOut();
    }, data.time_out * 1000);

    useEffect(() => {
        console.log('Progress ', progress);
    }, []);
    useEffect(() => {
        // console.log('inside progress bar use effect');
        // const id = setInterval(timerFunction, 1000);
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
