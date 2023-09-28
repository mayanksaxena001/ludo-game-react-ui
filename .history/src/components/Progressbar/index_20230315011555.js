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
            if(completed==50) {
                //handle time out
                handleTimeOut();
                clearInterval(id);
            }
            // let value = completed + 5;
            setCompleted(Math.floor(Math.random() * 100) + 1);
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
