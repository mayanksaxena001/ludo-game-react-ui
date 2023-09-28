import React, { useState } from 'react';
import './diceroller.css';
import '../../service/socket-service';

function DiceRoller() {
  const [diceNumber, setDiceNumber] = useState(0);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNum);
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="dice-board">
      <h1>Dice Roller</h1>
      <button onClick={rollDice} disabled={rolling}>
        Roll Dice
      </button>
      <div className={`dice  dice-${diceNumber} ${rolling ? 'rolling' : ''}`}>
        <div className="face top" />
        <div className="face bottom" />
        <div className="face left" />
        <div className="face right" />
        <div className="face front" />
        <div className="face back" />
      </div>
    </div>
  );
}

export default DiceRoller;
