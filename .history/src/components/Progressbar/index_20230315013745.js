import React, { useCallback,useEffect, useState } from 'react';
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
    const timerFunction =  useCallback(() => {
        setCompleted((completed)=>completed+1);
        if(completed===100) {
            //handle time out
            handleTimeOut();
            clearInterval(id);
        }
      },[])
    useEffect(() => {
        console.log('inside progress bar use effect');
        const id = setInterval(timerFunction, 1000);
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
