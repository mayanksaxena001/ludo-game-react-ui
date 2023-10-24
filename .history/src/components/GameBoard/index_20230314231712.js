// import logo from './logo.svg';
import React, { useEffect, useRef } from 'react';
import './game.css';
import HorizontalPath from '../HorizontalPath';
import House from '../house';
import VerticalPath from '../VerticalPath';
import DiceRoller from '../DiceRoller/diceroller3d';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function GameBoard(props) {
  const { id, playerTurn, player, isDisabled, gameData, dicehandler, handleTokenMove } = props;
  const prevData = usePrevious(gameData);
  let height = '50px', width = '50px';
  let player1Id = '1', player2Id = '2', player3Id = '3', player4Id = '4';
  let player1_name = gameData.players[player1Id] != undefined ? gameData.players[player1Id].name : 'A',
    player2_name = gameData.players[player2Id] != undefined ? gameData.players[player2Id].name : 'B',
    player3_name = gameData.players[player3Id] != undefined ? gameData.players[player3Id].name : 'C',
    player4_name = gameData.players[player4Id] != undefined ? gameData.players[player4Id].name : 'D';
  let color1 = gameData.players[player1Id] != undefined ? gameData.players[player1Id].color : '',
    color2 = gameData.players[player2Id] != undefined ? gameData.players[player2Id].color : '',
    color3 = gameData.players[player3Id] != undefined ? gameData.players[player3Id].color : '',
    color4 = gameData.players[player4Id] != undefined ? gameData.players[player4Id].color : '';

  useEffect(() => {
    console.log('Inside game board use effect ');
  });
  return (
    <div className='game-board' >
      <div className='board'>
        <div className='board-houses-1'>
          <House player={player} id={player2Id} value={player2_name} color={color2} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} />
          <VerticalPath id={player3Id} color={color3} height={height} width={width} data={gameData} />
          <House player={player} id={player3Id} value={player3_name} color={color3} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath id={player2Id} color={color2} height={height} width={width} data={gameData} />
          <div disabled={isDisabled} className='center-path'>
            <DiceRoller dicehandler={dicehandler} disabled={isDisabled} />
          </div>
          <HorizontalPath id={player4Id} color={color4} height={height} width={width} data={gameData} />
        </div>
        <div className='board-houses-2'>
          <House player={player} id={player1Id} value={player1_name} color={color1} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} />
          <VerticalPath id={player1Id} color={color1} height={height} width={width} data={gameData} />
          <House player={player} id={player4Id} value={player4_name} color={color4} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} />
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