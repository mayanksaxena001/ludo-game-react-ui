// import logo from './logo.svg';
import React from 'react';
import './game.css';

import { Link } from 'react-router-dom';
import House from '../house';
import VerticalPath from '../VerticalPath';
import HorizontalPath from '../HorizontalPath';

function GameBoard() {




  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
          <House />
          <VerticalPath />
          <House />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath />
          <div className='center-path'/>
          <HorizontalPath />
        </div>
        <div className='board-houses-2'>
          <House />
          <VerticalPath />
          <House />
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
