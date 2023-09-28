import React, { useEffect } from 'react';
import gameData from '../Game/gameData';
import './token.css';
//TODO
function Token(props) {
    const { id, value, height, width, color, data, handleTokenMove } = props;
    let playerTurn = gameData.player_turn;
    useEffect(() => {
        console.log('token use effect');
    });

    handleClassName
    return (
        <div className='token' style={{ backgroundColor: color, height: height, minWidth: width }}>
            {id}:{value}
        </div>
    )
}

export default Token;
