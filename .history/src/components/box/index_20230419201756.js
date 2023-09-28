// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, minHeight, minWidth, color, disabled, tokens,handleTokenMove } = props;

    const tokenValue = () => {
        if (tokens) {
            return <Token disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id}  minheight={minHeight} minWidth={minWidth} />
        }
        else return '';
    }
    return (
        <div id={id} disabled={disabled} className='path-box' style={{ backgroundColor: color, minHeight: minHeight, maxHeight: minHeight, minWidth: minWidth, maxWidth: minWidth }}>
            {tokenValue()}
        </div>
    );
}

export default Box;
