import React, { useState, useContext } from 'react';
import './diceroller.css';
function DiceRoller(props) {
  const { dicehandler } = props;

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
    }, 3000);
  };

  const element = () => {

    if (!rolling) return (
      <button className='circle' onClick={rollDice} >
        Roll Dice
      </button>
    )
    else {
      return <div className={`dice  dice-${diceNumber} ${rolling ? 'roll' : ''}`}>
        <div className="face top" />
        <div className="face bottom" />
        <div className="face left" />
        <div className="face right" />
        <div className="face front" />
        <div className="face back" />
      </div>
    }
  }
  return (
    <div className="dice-board" >
      {element()}
    </div>
  );
}

export default DiceRoller;
