// import logo from './logo.svg';
import React from 'react';
import './game.css';

import HorizontalPath from '../HorizontalPath';
import House from '../house';
import VerticalPath from '../VerticalPath';

function GameBoard(props) {
  const { id, value, players, tokencount } = props;
  let height = '50px', width = '50px';
  let color1 = 'Red', color2 = 'Blue', color3 = 'Green', color4 = 'Yellow';
  let player1Id='1',player2Id='2',player3Id='3',player4Id='4';
  let gameData = {};

  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
          <House id={player2Id} value='1' color={color2} minheight={height} minWidth={width} />
          <VerticalPath id={player3Id} color={color3} height={height} width={width} data={gameData}/>
          <House id={player3Id} value='1' color={color3} minheight={height} minWidth={width} />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath id={player2Id} color={color2} height={height} width={width} data={gameData}/>
          <div className='center-path' />
          <HorizontalPath id={player4Id} color={color4} height={height} width={width} data={gameData}/>
        </div>
        <div className='board-houses-2'>
          <House id={player1Id} value='1' color={color1} minheight={height} minWidth={width} />
          <VerticalPath id={player1Id} color={color1} height={height} width={width} data={gameData}/>
          <House id={player4Id} value='1' color={color4} minheight={height} minWidth={width} />
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
