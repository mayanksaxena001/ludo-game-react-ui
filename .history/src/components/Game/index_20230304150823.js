import React, { useState } from 'react';
import GameBoard from '../GameBoard';

function LudoGame() {
    const [players, setPlayers] = useState(['Red', 'Green', 'Blue', 'Yellow']);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [diceNumber, setDiceNumber] = useState(null);
    const [pieces, setPieces] = useState({
        Red: [null, null, null, null],
        Green: [null, null, null, null],
        Blue: [null, null, null, null],
        Yellow: [null, null, null, null]
    });

    const movePiece = (color, pieceIndex, steps) => {
        const newPieces = { ...pieces };
        let currentPos = newPieces[color][pieceIndex];
        let newPos = currentPos + steps;
        if (newPos > 51) {
            newPos = newPos - 52;
        }
        newPieces[color][pieceIndex] = newPos;
        setPieces(newPieces);
    };

    const getNextPlayer = () => {
        let nextPlayer = currentPlayer + 1;
        if (nextPlayer >= players.length) {
            nextPlayer = 0;
        }
        return nextPlayer;
    };

    const handlePlayerMove = () => {
        const color = players[currentPlayer];
        const pieceIndex = pieces[color].findIndex(
            (position) => position === null
        );
        if (pieceIndex !== -1) {
            movePiece(color, pieceIndex, diceNumber);
        }
        setCurrentPlayer(getNextPlayer());
    };

    return (
        <GameBoard id={'xyz'} />
        // <div className="ludo-container">
        //   <div className="board">
        //     {players.map((color) => (
        //       <div key={color} className={`pieces ${color}`}>
        //         {pieces[color].map((position, index) => (
        //           <div
        //             key={index}
        //             className={`piece piece-${index} ${
        //               position !== null ? 'active' : ''
        //             }`}
        //           />
        //         ))}
        //       </div>
        //     ))}
        //   </div>
        // </div>
    );
}

export default LudoGame;