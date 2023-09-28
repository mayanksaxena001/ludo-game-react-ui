import React, { useEffect } from 'react';
import './token.css';
//TODO
function Token(props) {
    const { id, value, height, width, color, data, handleTokenMove } = props;
    let playerTurn = data.player_turn;
    useEffect(() => {
        console.log('token use effect');
    });
    
    const handleClassName = () => {
        // let enableToken= value+id
        if (value == playerTurn && data != undefined && data.dice_value == 6) return "token token_glow";
        else return "token";
    }
    return (
        <div className={handleClassName()} onClick={handleTokenMove} style={{ backgroundColor: color, height: height, minWidth: width }}>
            {id}:{value}
        </div>
    )
}

export default Token;
