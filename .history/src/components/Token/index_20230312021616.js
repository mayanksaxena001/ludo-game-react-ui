import React, { useEffect } from 'react';
import './token.css';

function Token(props) {
    useEffect(()=>{
        console.log('token use effect');
    });
    return (
        <div className='token' style={{ backgroundColor: props.color }}>

        </div>
    )
}

export default Token;
