// import logo from './logo.svg';
import React, { useEffect } from 'react';
import Box from '../box';
import Profile from '../profile';
import ProgressBar from '../progressbar';
import Token from '../token';
import './house.css';

function House(props) {

  const { id, player, minHeight, minWidth, color, data, handleTokenMove, handleTimeOut,isEnabled } = props;
  const height = 6 * minHeight;
  const minHeight_ = 6 * minHeight;
  const maxHeight = 6 * minHeight;

  const width = 6 * minWidth;
  const minWidth_ = 6 * minHeight;
  const maxWidth = 6 * minHeight;


  useEffect(() => {
    console.log('house use effect');
  });

  const getHouseClass = () => {
    // if (!player.active) return "house disabled";
    return "house"
    // if (data != undefined && player.player_turn === data.player_turn && id === (player.player_turn + '')) return "house blinkdiv";
    // else return "house";
  }

  const isDisabled = player != null && player.active && player.player_turn == data.player_turn ? true : false;
  const displayProgressbar = () => {
    //TODO : add player id to check
    if (data.has_started && player.player_turn === data.player_turn) return <ProgressBar key={id} bgcolor={color} handleTimeOut={handleTimeOut} data={data} />
  }

  const playerName = () => {
    if (player !== undefined && player.username !== undefined) return player.username;
    return '';
  }

  // <Token disabled={isDisabled} player={player} color={color} handleTokenMove={handleTokenMove} id={1} value={id} minheight={height} minWidth={width} data={data} />
  const tokenBox = () => {
    let tokens = player.house && player.house.tokens ? player.house.tokens : [];
    // console.log('tokens',tokens);
    let token1 = tokens && tokens[0] && tokens[0].position === 'base' ? [tokens[0]] : [];
    let token2 = tokens && tokens[1] && tokens[1].position === 'base' ? [tokens[1]] : [];
    let token3 = tokens && tokens[2] && tokens[2].position === 'base' ? [tokens[2]] : [];
    let token4 = tokens && tokens[3] && tokens[3].position === 'base' ? [tokens[3]] : [];

    return <>
      <div className='tokens'>
        <Box isEnabled={isEnabled}  height={minHeight} width={minWidth} tokens={token1} handleTokenMove={handleTokenMove} />
        <Box isEnabled={isEnabled}  height={minHeight} width={minWidth} tokens={token2} handleTokenMove={handleTokenMove} />
      </div>
      <div className='tokens'>
        <Box isEnabled={isEnabled} height={minHeight} width={minWidth} tokens={token3} handleTokenMove={handleTokenMove} />
        <Box isEnabled={isEnabled}  height={minHeight} width={minWidth} tokens={token4} handleTokenMove={handleTokenMove} />
      </div>
    </>
  }
  return (
    <div disabled={!isDisabled} className={getHouseClass()} style={{ borderColor: color, height: { height }, minHeight: { minHeight_ }, maxHeight: { maxHeight }, width: { width }, minWidth: { minWidth_ }, maxWidth: { maxWidth } }}>
      {tokenBox()}
      <h1 style={{ backgroundColor: { color } }}>
        {playerName()}
      </h1>
      {displayProgressbar()}
      {/* <Profile  {...props} /> */}
      {/* <div>
        <DiceRoller />
      </div> */}
    </div>
  );
}

export default House;
