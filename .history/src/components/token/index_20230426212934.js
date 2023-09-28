import React, { useEffect } from 'react';
import './token.css';
//TODO
function Token(props) {
    const { id, value, height, width, color, tokenData, handleTokenMove } = props;
    const handleClassName = () => {
        if (tokenData.active) return "token circle";
        return "token circle";
        // let playerTurn = data.player_turn;
        // // let enableToken= value+id
        // if (player.player_turn === playerTurn) return "token token_glow blinkdiv";
        // else return "token";
    }
    const fillerStyles = {
        height: `${height}%`,
        width: `${width}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }
    const head = {
        position: absolute,
        top: `${'5px'}%`,
        left: `${'17px'}%`,
        width: '16px',
        height: '16px',
        borderRadius: '50 %',
        backgroundColor: #f7dc6f,
    }

    const body = {
        position: absolute,
        top: '20px',
        left:' 20px',
        width: '10px',
        height: '20px',
        backgroundColor: '#f7dc6f',
}

const arm = {
    position: absolute;
    top: 24px;
    width: 8px;
    height: 12px;
    background- color: #f7dc6f;
    }


const getClassName = () => {
    if (tokenData.active) return "token circle";
    return `token ${color}`;
}

useEffect(() => {
    console.log('token use effect');
});
return (
    <div className={getClassName()} onClick={() => handleTokenMove(tokenData)} >
        <div className="head"></div>
        <div className="body"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
    </div>
);

    // return (
    //     <div className={handleClassName()} onClick={handleTokenMove} 
    //     style={{ backgroundColor: color, height: height, width: width }}>
    //         {/* {id}:{value} */}
    //     </div>
    // )
}

export default Token;
