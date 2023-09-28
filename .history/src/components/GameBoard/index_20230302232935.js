// import logo from './logo.svg';
import React from 'react';
import './game.css';

import {  Link } from 'react-router-dom';

function GameBoard() {

  return (
    <div className='game-board'>
      Game Board Works

      <div>
      Return to&nbsp;
      <Link to="/">Home</Link>
      </div>
    </div>
    
  );
}

export default GameBoard;
