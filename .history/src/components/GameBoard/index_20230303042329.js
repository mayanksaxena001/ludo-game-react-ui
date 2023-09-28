// import logo from './logo.svg';
import React from 'react';
import './game.css';

import {  Link } from 'react-router-dom';

function GameBoard() {

  const EmptyBoxes = <div className='path-box'>
   1
  </div>;

const HPath = <div>
  <EmptyBoxes/>
  <EmptyBoxes/>
  <EmptyBoxes/>
  <EmptyBoxes/>
  <EmptyBoxes/>
  <EmptyBoxes/>
</div>
  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
          <div className='house'></div>
          <HPath/>
          <HPath/>
          <HPath/>
          <div className='house'></div>
        </div>
        <div className='board-houses-2'>
          <div className='house'></div>
          <HPath/>
          <HPath/>
          <HPath/>
          <div className='house'></div>
        </div>

      </div>
      {/* <div>
      Return to&nbsp;
      <Link to="/">Home</Link>
      </div> */}
    </div>
    
  );
}

export default GameBoard;
