// import logo from './logo.svg';
import React, { useEffect, useRef, useState } from 'react';
import './game.css';
import HorizontalPath from '../horizontalpath';
import House from '../house';
import VerticalPath from '../verticalpath';
import DiceRoller from '../diceroller/diceroller3d';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function GameBoard(props) {
  const { id, player, gameData, dicehandler, handleTokenMove, handleTimeOut, startGameHandler } = props;
  // const prevData = usePrevious(gameData);

  let height = '50px', width = '50px';
  const isEnabled = player !== undefined && player.player_turn === gameData.player_turn ? true : false;
  let PLAYER_1 = '1', PLAYER_2 = '2', PLAYER_3 = '3', PLAYER_4 = '4';
  let player1Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_1] : null,
    player2Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_2] : null,
    player3Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_3] : null,
    player4Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_4] : null;
  let player1 = gameData !== undefined && gameData.players !== undefined && player1Id ? gameData.players[player1Id] : {},
    player2 = gameData !== undefined && gameData.players !== undefined && player2Id ? gameData.players[player2Id] : {},
    player3 = gameData !== undefined && gameData.players !== undefined && player3Id ? gameData.players[player3Id] : {},
    player4 = gameData !== undefined && gameData.players !== undefined && player4Id ? gameData.players[player4Id] : {};
  let color1 = gameData.players !== undefined && gameData.players[player1Id] !== undefined && gameData.players[player1Id].color !== undefined ? gameData.players[player1Id].color : '',
    color2 = gameData.players !== undefined && gameData.players[player2Id] !== undefined && gameData.players[player2Id].color !== undefined ? gameData.players[player2Id].color : '',
    color3 = gameData.players !== undefined && gameData.players[player3Id] !== undefined && gameData.players[player3Id].color !== undefined ? gameData.players[player3Id].color : '',
    color4 = gameData.players !== undefined && gameData.players[player4Id] !== undefined && gameData.players[player4Id].color !== undefined ? gameData.players[player4Id].color : '';

  useEffect(() => {
    console.log('Inside game board use effect ');
  });

  const waitingInfo = () => {
    const diceValue = () => <div>  Dice Value : {gameData.dice_value}</div>
    const winners = () => {
      let count = 0;
      return gameData.home.map(playerId => {
        const username = gameData.players[playerId].username;
        count++;
        return <div className='waiting_info'>
          {count} : {username}
        </div>
      })
    }

    if (gameData.has_started === true && gameData.has_stopped === false) {
      if (!gameData.diceCastComplete && isEnabled) return <DiceRoller dicehandler={dicehandler} />;
      else return <>{diceValue()}</>
    }
    else if (gameData.has_stopped === true && gameData.has_started === false)
      return <>{winners()}</>
    else return;
  }
  return (
    <div className='game-board' >
      <div className='board'>
        <div className='board-houses-1'>
          <House isEnabled={isEnabled} player={player2} id={player2Id} color={color2} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
          <VerticalPath isEnabled={isEnabled} id={PLAYER_3} player={player3} color={color3} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} />
          <House isEnabled={isEnabled} player={player3} id={player3Id} color={color3} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath isEnabled={isEnabled} id={PLAYER_2} player={player2} color={color2} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} />
          <div className='center-path'>
            {waitingInfo()}
          </div>
          <HorizontalPath isEnabled={isEnabled} id={PLAYER_4} player={player4} color={color4} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} />
        </div>
        <div className='board-houses-2'>
          <House isEnabled={isEnabled} player={player1} id={player1Id} color={color1} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
          <VerticalPath isEnabled={isEnabled} id={PLAYER_1} player={player1} color={color1} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} />
          <House isEnabled={isEnabled} player={player4} id={player4Id} color={color4} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
