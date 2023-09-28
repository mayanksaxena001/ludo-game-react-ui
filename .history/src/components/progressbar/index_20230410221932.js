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
    const timerFunction = useCallback(() => {
        setCompleted((completed) => completed + 1);
    }, []);
    const timeOut = () => setTimeout(() => {
        handleTimeOut();
    }, data.time_out * 1000);

    useEffect(() => {
        console.log('Progress ', completed);
    }, [completed]);

    timeOut();
    useEffect(() => {
        // console.log('inside progress bar use effect');
        const id = setInterval(timerFunction, 1000);
        return () => {
            clearInterval(id);
        }
    }, [timerFunction]);
    return (
        <div className='progressbar' >
            <div style={fillerStyles}>
                <span className='labelStyles'>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
