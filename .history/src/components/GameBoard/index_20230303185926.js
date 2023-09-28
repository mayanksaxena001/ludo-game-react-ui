// import logo from './logo.svg';
import React from 'react';
import './game.css';

import HorizontalPath from '../HorizontalPath';
import House from '../house';
import VerticalPath from '../VerticalPath';

function GameBoard() {
  let height='50px',width='50px';
  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
          <House  id='1' value='1' minheight={height} minWidth={width}/>
          <VerticalPath id='1' />
          <House  id='2' value='1' minheight={height} minWidth={width}/>
        </div>
        <div className='center-board-houses'>
          <HorizontalPath  id='1'  minheight={height} minWidth={width}/>
          <div className='center-path'/>
          <HorizontalPath  id='2'  minheight={height} minWidth={width}/>
        </div>
        <div className='board-houses-2'>
          <House  id='3' value='1' minheight={height} minWidth={width}/>
          <VerticalPath  id='2'/>
          <House  id='4' value='1' minheight={height} minWidth={width}/>
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
