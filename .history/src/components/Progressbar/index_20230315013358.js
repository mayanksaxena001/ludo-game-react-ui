import React, { useEffect, useState } from 'react';
import './progressbar.css';
const ProgressBar = (props) => {
    const { bgcolor,handleTimeOut } = props;
    const [completed, setCompleted] = useState(0);
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }
    console.log('Progress ', completed);
    useEffect(() => {
        console.log('inside progress bar use effect');
        let id = setInterval(() => {
            console.log('setInterval');
            setCompleted((completed)=>completed+1);
            if(completed===100) {
                //handle time out
                handleTimeOut();
                clearInterval(id);
            }
        }, 1000);
        return () => {
            clearInterval(id);
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
