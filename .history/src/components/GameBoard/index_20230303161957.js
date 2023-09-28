// import logo from './logo.svg';
import React from 'react';
import './game.css';

import {  Link } from 'react-router-dom';
import House from '../house';
import PathBox from '../PathBox';

function GameBoard() {

  const EmptyBoxes = <PathBox/>;

const HPath = <div className='hpath'>
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
</div>

const VPath = <div className='vpath'>
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
  {EmptyBoxes}
</div>
  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
        <House/>
          <div className='vertical-path-1'>
          {VPath}
          {VPath}
          {VPath}
          </div>
          <House/>
        </div>
        <div className='center-board-houses'>
          <div className='horizontal-path-1'>
          {HPath}
          {HPath}
          {HPath}
          </div>
          <div className='center-path'>

          </div>
          <div className='horizontal-path-2'>
          {HPath}
          {HPath}
          {HPath}
          </div>
        </div>
        <div className='board-houses-2'>
          <House/>
          <div className='vertical-path-2'>
          {VPath}
          {VPath}
          {VPath}
          </div>
          <House/>
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
