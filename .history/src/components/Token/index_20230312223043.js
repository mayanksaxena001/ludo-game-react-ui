import React, { useEffect } from 'react';
import './token.css';
//TODO
function Token(props) {
    const { id, value, height, width, color, data, handleTokenMove } = props;
    
    useEffect(() => {
        console.log('token use effect');
    });
    return (
        <div className='token' style={{ backgroundColor: color, height: height, minWidth: width }}>
            {id}:{value}
        </div>
    )
}

export default Token;
