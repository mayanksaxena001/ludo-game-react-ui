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
        borderRadius: '50%',
    }

    const getClassName = () => {
        if (tokenData.className) return "token circle";
        return `token `;
    }

    useEffect(() => {
        console.log('token use effect');
    });
    // return (
    //     <div className={getClassName()} onClick={() => handleTokenMove(tokenData)} >
    //         <div style={head}></div>
    //         <div style={body}></div>
    //         <div style={arm} className="arm arm-left"></div>
    //         <div style={arm} className="arm arm-right"></div>
    //         <div style={arm} className="leg leg-left"></div>
    //         <div style={arm} className="leg leg-right"></div>
    //     </div>
    // );

    return (
        <div style={fillerStyles} className={getClassName()} onClick={handleTokenMove}>
            {/* {id}:{value} */}
        </div>
    )
}

export default Token;
