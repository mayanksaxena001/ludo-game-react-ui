// import logo from './logo.svg';
import React from 'react';
import Token from '../token';
import './pathbox.css';


function Box(props) {

    const { id, height, width, color, disabled, tokens, handleTokenMove, isEnabled, isSafeBox,move_token } = props;
    const safeBox = () => {
        if (isSafeBox) {
            return <>
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,5 61,35 95,35 67,57 76,90 50,70 24,90 33,57 5,35 39,35"
                        fill="none" stroke="grey" stroke-width="3" />
                </svg>
            </>
        }
        return;
    }
    const content = () => {
        if (tokens && tokens.length > 0) {
            return <>
                {tokens.map(token => {
                    if (token) return <Token isEnabled={isEnabled} key={token.id} tokenData={token} disabled={disabled} color={color} handleTokenMove={handleTokenMove} id={id} height={height} width={width} move_token={move_token}/>
                        return;
                    })}
            </>
        }
        // else return id;
    }

    const getClassname = () => {
        return 'path-box';
    }
    return (
        <div id={id} disabled={disabled} className={getClassname()} style={{ backgroundColor: color, height: height, width: width ,minHeight:'40px',minWidth:'40px'}}>
            {safeBox()}
            {content()}
        </div>
    );
}

export default Box;
