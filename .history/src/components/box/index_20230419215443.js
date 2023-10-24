// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, height, width, color, disabled, tokens, handleTokenMove } = props;
    const tokenValue = () => {
        if (tokens && tokens.length > 0) {
            return tokens.map(key => {
                return <Token key={key} disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id} height={height} width={width} />
            });
        }
        else return '';
    }
    return (
        <div id={id} disabled={disabled} className='path-box' style={{ backgroundColor: color, height: height, width: width }}>
            {tokenValue()}
        </div>
    );
}

export default Box;