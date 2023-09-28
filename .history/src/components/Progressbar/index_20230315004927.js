import React, { useEffect, useState } from 'react';
import './progressbar.css';
const ProgressBar = (props) => {
    const { bgcolor } = props;
    const [value, setValue] = useState(0);
    const fillerStyles = {
        height: '100%',
        width: `${value}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }
    console.log('Progress ',value);
    useEffect(() => {
        console.log('inside progress bar use effect');
        setInterval(() => {
            const latest=value+10;
            setValue(latest);
        }, 10);
    }, []);
    return (
        <div className='progressbar' >
            <div style={fillerStyles}>
                <span className='labelStyles'>{`${value}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
