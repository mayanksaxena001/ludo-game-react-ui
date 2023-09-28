import React, { useEffect } from 'react';
import './token.css';
//TODO
function Token(props) {
    const { id, player, value, height, width, color, data, handleTokenMove } = props;
    useEffect(() => {
        console.log('token use effect');
    });

    const handleClassName = () => {
        let playerTurn = data.player_turn;
        // let enableToken= value+id
        if (value == playerTurn && data != undefined && data.dice_value == 6 && player.player_turn == playerTurn) return "token token_glow";
        else return "token";
    }
    return (
        <div className={handleClassName()} onClick={handleTokenMove} style={{ backgroundColor: color, height: height, minWidth: width }}>
            {id}:{value}
        </div>
    )
}

export default Token;
