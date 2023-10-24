import React, { useState } from 'react';
import GameBoard from '../GameBoard';

function LudoGame() {
    const [data, setData] = useState([null]);
    const [players, setPlayers] = useState(['Red', 'Green', 'Blue', 'Yellow']);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [gameStarted, setGameStarted] = useState(false);
    const [pieces, setPieces] = useState({
        Red: [null, null, null, null],
        Green: [null, null, null, null],
        Blue: [null, null, null, null],
        Yellow: [null, null, null, null]
    });
    const [room, setRoom] = useState([123]);
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

    const handlePlayerMove = (diceNumber) => {
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
        <GameBoard id={'xyz'} room={room} disabled={gameStarted} gameData={data}/>
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