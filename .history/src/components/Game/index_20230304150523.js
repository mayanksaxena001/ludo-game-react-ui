import React, { useState } from 'react';

function LudoGame() {
  const [players, setPlayers] = useState(['Red', 'Green', 'Blue', 'Yellow']);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceNumber, setDiceNumber] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [pieces, setPieces] = useState({
    Red: [null, null, null, null],
    Green: [null, null, null, null],
    Blue: [null, null, null, null],
    Yellow: [null, null, null, null]
  });

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNum);
      setRolling(false);
    }, 1000);
  };

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
    <div className="ludo-container">
      <h1>Ludo Game</h1>
      <button onClick={rollDice} disabled={rolling}>
        Roll Dice
      </button>
      <div className={`dice dice-${diceNumber} ${rolling ? 'rolling' : ''}`}>
        <div className="face top" />
        <div className="face bottom" />
        <div className="face left" />
        <div className="face right" />
        <div className="face front" />
        <div className="face back" />
      </div>
      <div className="board">
        {players.map((color) => (
          <div key={color} className={`pieces ${color}`}>
            {pieces[color].map((position, index) => (
              <div
                key={index}
                className={`piece piece-${index} ${
                  position !== null ? 'active' : ''
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LudoGame;