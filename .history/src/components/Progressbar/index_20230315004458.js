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
        textAlign: 'right'
    }
    console.log('Progress ',value);
    useEffect(() => {
        setTimeout(() => {
            value=value+10;
            setValue(value);
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
