import React, { useState } from 'react';
import './diceroller.css'

function DiceRoller() {
    const [diceNumber, setDiceNumber] = useState(null);
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
        <div className='dice-board'>
            <h1>Dice Roller</h1>
            <button onClick={rollDice} disabled={rolling}>
                Roll Dice
            </button>
            {diceNumber && (
                <div className={`dice dice-${diceNumber} ${rolling ? 'rolling' : ''}`} />
            )}
        </div>
    );
}

export default DiceRoller;