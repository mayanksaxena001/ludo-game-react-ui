// import logo from './logo.svg';
import React from 'react';
import './game.css';

import HorizontalPath from '../HorizontalPath';
import House from '../house';
import VerticalPath from '../VerticalPath';
import DiceRoller from '../DiceRoller/diceroller3d';

function GameBoard(props) {
  const { id, value, playerIds, tokencount } = props;
  let height = '50px', width = '50px';
  let color1 = '#ff0000', color2 = '#0000ff', color3 = '#008000', color4 = '#ffff00';
  let player1Id = '1', player2Id = '2', player3Id = '3', player4Id = '4';
  let gameData = {};
  let player1_name = 'A', player2_name = 'B', player3_name = 'C', player4_name = 'D';

  return (
    <div className='game-board'>
      <div className='board'>
        <div className='board-houses-1'>
          <House id={player2Id} value={player2_name} color={color2} minheight={height} minWidth={width} />
          <VerticalPath id={player3Id} color={color3} height={height} width={width} data={gameData} />
          <House id={player3Id} value={player3_name} color={color3} minheight={height} minWidth={width} />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath id={player2Id} color={color2} height={height} width={width} data={gameData} />
          <div className='center-path'>
            <DiceRoller />
          </div>
          <HorizontalPath id={player4Id} color={color4} height={height} width={width} data={gameData} />
        </div>
        <div className='board-houses-2'>
          <House id={player1Id} value={player1_name} color={color1} minheight={height} minWidth={width} />
          <VerticalPath id={player1Id} color={color1} height={height} width={width} data={gameData} />
          <House id={player4Id} value={player4_name} color={color4} minheight={height} minWidth={width} />
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
