// import logo from './logo.svg';
import React from 'react';
import './game.css';

import {  Link } from 'react-router-dom';

function GameBoard() {

  return (
    <div className='game-board'>
      <div className='board'>
          <div className='house'></div>

      </div>
      {/* <div>
      Return to&nbsp;
      <Link to="/">Home</Link>
      </div> */}
    </div>
    
  );
}

export default GameBoard;
