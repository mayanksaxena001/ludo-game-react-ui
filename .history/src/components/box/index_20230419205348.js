// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, minHeight, minWidth, color, disabled, tokens,handleTokenMove } = props;
    console.log('tokens',tokens);
    const tokenValue = () => {
        if (tokens) {
            return tokens.map(key=>{
                return <Token disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id}  minheight={minHeight} minWidth={minWidth} />
            });
        }
        else return id;
    }
    return (
        <div id={id} disabled={disabled} className='path-box' style={{ backgroundColor: color, minHeight: minHeight, maxHeight: minHeight, minWidth: minWidth, maxWidth: minWidth }}>
            {tokenValue()}
        </div>
    );
}

export default Box;
