// import logo from './logo.svg';
import React from 'react';
import './game.css';

import HorizontalPath from '../HorizontalPath';
import House from '../house';
import VerticalPath from '../VerticalPath';

function GameBoard() {
  let height = '50px', width = '50px';
  let color1 = 'Red', color2 = 'Blue', color3 = 'Green', color4 = 'Yellow';
  let player1Id='1',player2Id='2',player3Id='3',player4Id='4';

  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
          <House id='1' value='1' color={color1} minheight={height} minWidth={width} />
          <VerticalPath id={player2Id} color={color4} height={height} width={width} />
          <House id='2' value='1' color={color4} minheight={height} minWidth={width} />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath id={player1Id} color={color1} height={height} width={width} />
          <div className='center-path' />
          <HorizontalPath id='2' color={color3} height={height} width={width} />
        </div>
        <div className='board-houses-2'>
          <House id='3' value='1' color={color2} minheight={height} minWidth={width} />
          <VerticalPath id={player2Id} color={color2} height={height} width={width} />
          <House id='4' value='1' color={color3} minheight={height} minWidth={width} />
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
