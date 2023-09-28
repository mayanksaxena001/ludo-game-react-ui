// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, minHeight, minWidth, color, disabled, tokens, handleTokenMove } = props;
    const tokenValue = () => {
        if (tokens && tokens.length > 0) {
            console.log('tokens', tokens);
            return tokens.map(key => {
                return <Token key={key} disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id} minheight={minHeight} minWidth={minWidth} />
            });
        }
        else return id;
    }
    return (
        <div id={id} disabled={disabled} className='path-box' style={{ backgroundColor: color, height: minHeight, width: minWidth }}>
            {tokenValue()}
        </div>
    );
}

export default Box;
