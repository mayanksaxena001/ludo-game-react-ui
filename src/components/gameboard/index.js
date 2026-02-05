// import logo from './logo.svg';
import React, { useEffect, useRef, useState } from 'react';
import './game.css';
import HorizontalPath from '../horizontalpath';
import House from '../house';
import VerticalPath from '../verticalpath';
import DiceRoller from '../diceroller/diceroller3d';
import { Avatar } from '@material-ui/core';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function GameBoard(props) {
  const { id, player, gameData, dicehandler, handleTokenMove, handleTimeOut, messages,moveTokenPosition } = props;
  // const prevData = usePrevious(gameData);
  // "#ff0000", "#0000ff", "#008000", "#ffff00"
  let height = '40px', width = '40px';
  const isEnabled = player !== undefined  && player.player_turn === gameData.player_turn ? true : false;
  let PLAYER_1 = '1', PLAYER_2 = '2', PLAYER_3 = '3', PLAYER_4 = '4';
  let player1Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_1] : null,
    player2Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_2] : null,
    player3Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_3] : null,
    player4Id = gameData !== undefined && gameData.turns !== undefined ? gameData.turns[PLAYER_4] : null;
  let player1 = gameData !== undefined && gameData.players !== undefined && player1Id ? gameData.players[player1Id] : {},
    player2 = gameData !== undefined && gameData.players !== undefined && player2Id ? gameData.players[player2Id] : {},
    player3 = gameData !== undefined && gameData.players !== undefined && player3Id ? gameData.players[player3Id] : {},
    player4 = gameData !== undefined && gameData.players !== undefined && player4Id ? gameData.players[player4Id] : {};
  let color1 = gameData.players !== undefined && gameData.players[player1Id] !== undefined && gameData.players[player1Id].color !== undefined ? gameData.players[player1Id].color : '#ff0000',
    color2 = gameData.players !== undefined && gameData.players[player2Id] !== undefined && gameData.players[player2Id].color !== undefined ? gameData.players[player2Id].color : '#0000ff',
    color3 = gameData.players !== undefined && gameData.players[player3Id] !== undefined && gameData.players[player3Id].color !== undefined ? gameData.players[player3Id].color : '#008000',
    color4 = gameData.players !== undefined && gameData.players[player4Id] !== undefined && gameData.players[player4Id].color !== undefined ? gameData.players[player4Id].color : '#ffff00';

  useEffect(() => {
    console.log('Inside game board use effect ');
  });

  const center_info = () => {
    return <LudoCenter/>;
    // const diceValue = () => <div>  Dice Value : {gameData.dice_value}</div>

    // if (gameData.has_started === true && gameData.has_stopped === false) {
    //   return <>{diceValue()}</>
    // }
    // else return <><div className='box'>Board Area</div></>;
  }
  const playerName = (player_) => {
    if (player_ !== undefined && player_.username !== undefined) return player_.username;
    return '';
  }

  const playerdicepanel=(player_)=>{
    let dicevalues = gameData.previousDiceValues[player_.player_turn]?gameData.previousDiceValues[player_.player_turn]:[0,0,0,0];
    if (gameData.has_started === true && gameData.has_stopped === false) {
      if (!gameData.diceCastComplete && isEnabled && player_.id===player.id) return <DiceRoller dicehandler={dicehandler} />;
      else return<>{diceImages(dicevalues[0])}</>;
    }
    else return<>{diceImages(dicevalues[0])}</>;
  }

  const diceImages = (value) => {
    const imageUrl = `/img/dice${value}.png`;
    return <img width='100%' height='100%' src={imageUrl} alt="logo" />;
  }
  const getClassName = (playerValue) => {
    if(playerValue.player_turn === gameData.player_turn) return "player-info blink";
    else return "player-info";
  }

  const messagePopup = (playerValue) => {
       
    return <div style={{
      position: 'absolute',
      top: '-40px',
      left: '89px'
    }}>
      <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 Q10 10 20 10 H80 Q90 10 90 20 V60 Q90 70 80 70 H30 L15 85 V70 H20 Q10 70 10 60 Z"
          fill="none" stroke="grey" stroke-width="3" />
      </svg>
      {disappearingMsg(playerValue)}
    </div>
  }
  const disappearingMsg=(playerValue)=>{
    const lastMessage=messages.size-1;
    const message=messages[lastMessage];
    if(message && message.userId===playerValue.id)
        return  <div class="chat-message" id="chatMessage">
         {message.content}
        </div>
  }
  const playerinfobox1panel = (className, playerValue, color) => {
    return <><div className={className}>
      <div className={getClassName(playerValue)}>
        {messagePopup(playerValue)}
        <Avatar disabled={!playerValue} style={{ backgroundColor: color }}></Avatar>
        {playerName(playerValue)}
      </div>
      <div style={{ width: '60px', height: '60px',border:'1px groove azure',padding:'3px' }}>
        {
          playerdicepanel(playerValue)
        }
      </div>
    </div>
    </>
  }

  const LudoCenter = () => {
    const borderColor1=color1+" transparent transparent transparent";
    const borderColor2="transparent "+ color2+" transparent transparent";
    const borderColor3="transparent transparent "+color3+" transparent";
    const borderColor4=" transparent transparent transparent "+ color4;
    return (
      <div className="ludo-center">
        <div className="triangle color1" style={{borderColor:borderColor1}}></div>
        <div className="triangle color2" style={{borderColor:borderColor2}} ></div>
        <div className="triangle color3" style={{borderColor:borderColor3}} ></div>
        <div className="triangle color4" style={{borderColor:borderColor4}} ></div>
      </div>
    );
  };
   
  return (
    <div className='game-board' >
       <div className='player-info-panel'>
          {playerinfobox1panel('player-info-box-1',player2,color2)}
          {playerinfobox1panel('player-info-box-1-reverse',player3,color3)}
        </div>
      <div className='board'>
        <div className='board-houses-1'>
          <House isEnabled={isEnabled} player={player2} id={player2Id} color={color2} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
          <VerticalPath isEnabled={isEnabled} id={PLAYER_3} player={player3} color={color3} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} moveTokenPosition={moveTokenPosition}/>
          <House isEnabled={isEnabled} player={player3} id={player3Id} color={color3} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
        </div>
        <div className='center-board-houses'>
          <HorizontalPath isEnabled={isEnabled} id={PLAYER_2} player={player2} color={color2} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} moveTokenPosition={moveTokenPosition}/>
          <div className='center-path'>
            {center_info()}
          </div>
          <HorizontalPath isEnabled={isEnabled} id={PLAYER_4} player={player4} color={color4} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} moveTokenPosition={moveTokenPosition}/>
        </div>
        <div className='board-houses-2'>
          <House isEnabled={isEnabled} player={player1} id={player1Id} color={color1} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
          <VerticalPath isEnabled={isEnabled} id={PLAYER_1} player={player1} color={color1} height={height} width={width} data={gameData} handleTokenMove={handleTokenMove} moveTokenPosition={moveTokenPosition}/>
          <House isEnabled={isEnabled} player={player4} id={player4Id} color={color4} minheight={height} minWidth={width} data={gameData} handleTokenMove={handleTokenMove} handleTimeOut={handleTimeOut} />
        </div>
      </div>
        <div className='player-info-panel'>
        {playerinfobox1panel('player-info-box-2',player1,color1)}
        {playerinfobox1panel('player-info-box-2-reverse',player4,color4)}
        </div>
    </div >
  );
}

export default GameBoard;
