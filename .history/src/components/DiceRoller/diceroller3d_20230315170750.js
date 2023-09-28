import React, { useState, useContext } from 'react';
import './diceroller.css';
function DiceRoller(props) {
  const { id ,dicehandler,disabled} = props;

  const [diceNumber, setDiceNumber] = useState(0);
  const [rolling, setRolling] = useState(false);

  //TODO : refactor service
  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      // console.log("Dice value : ", randomNum);
      setDiceNumber(randomNum);
      dicehandler(randomNum);
      //
      setRolling(false);
      // let audio = new Audio('/audio/dice.mp3')//not working for some browser
      // audio.play();
    }, 1000);
  };

  return (
    <div className="dice-board" disabled={disabled}>
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
