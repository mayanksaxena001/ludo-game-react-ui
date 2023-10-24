import React, { useEffect } from 'react';
import './token.css';

function Token(props) {
    const { id, height, width, color, data, handleTokenMove } = props;
    useEffect(() => {
        console.log('token use effect');
    });
    return (
        <div className='token' style={{ backgroundColor: props.color, minHeight: props.minHeight, minWidth: props.minWidth }}>

        </div>
    )
}

export default Token;