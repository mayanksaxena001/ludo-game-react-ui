// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, value, minHeight, minWidth, color, disabled, token,handleTokenMove } = props;

    const tokenValue = () => {
        if (token) return <Token disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id}  minheight={minHeight} minWidth={minWidth} />
        else return '';
    }
    return (
        <div id={id} disabled={disabled} className='path-box' style={{ backgroundColor: color, minHeight: minHeight, maxHeight: minHeight, minWidth: minWidth, maxWidth: minWidth }}>
            {tokenValue()}
        </div>
    );
}

export default Box;
