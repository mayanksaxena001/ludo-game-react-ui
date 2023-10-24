// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, height, width, color, disabled, tokens, handleTokenMove } = props;
    const content = () => {
        if (tokens && tokens.length > 0) {
            return tokens.map(key => {
                let token = tokens[key];
                return <Token key={token.id} disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id} height={height} width={width} />
            });
        }
        else return id;
    }

    const getClassname= ()=>{
        return 'path-box';
    }
    return (
        <div id={id} disabled={disabled} className={getClassname()} style={{ backgroundColor: color, height: height, width: width }}>
            {content()}
        </div>
    );
}

export default Box;