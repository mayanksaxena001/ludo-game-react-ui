import React, { useEffect } from 'react';
import './token.css';
//TODO
function Token(props) {
    const { id, player, value, height, width, color, data, handleTokenMove } = props;
    useEffect(() => {
        console.log('token use effect');
    });

    const handleClassName = () => {
        return "token";
        // let playerTurn = data.player_turn;
        // // let enableToken= value+id
        // if (player.player_turn === playerTurn) return "token token_glow blinkdiv";
        // else return "token";
    }
    return (
        <div className={handleClassName()} onClick={handleTokenMove} 
        style={{ backgroundColor: color, height: height, width: width }}>
            {/* {id}:{value} */}
        </div>
    )
}

export default Token;
