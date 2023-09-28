// import logo from './logo.svg';
import React, { useEffect } from 'react';
import Profile from '../profile';
import ProgressBar from '../progressbar';
import Token from '../token';
import './house.css';

function House(props) {

  const { id, player, minHeight, minWidth, color, data, handleTokenMove, handleTimeOut } = props;
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
    return <>
      <div className='tokens'>
        <Box id={1} color={color} minheight={height} minWidth={width} />
        <Box id={2} color={color} value={boxId} minheight={height} minWidth={width} />
      </div>
      <div className='tokens'>
        <Box id={3} color={color} minheight={height} minWidth={width} />
        <Box id={4} color={color} minheight={height} minWidth={width} />
      </div>
    </>
  }
  return (
    <div disabled={isDisabled} className={getHouseClass()} style={{ borderColor: color, height: { height }, minHeight: { minHeight_ }, maxHeight: { maxHeight }, width: { width }, minWidth: { minWidth_ }, maxWidth: { maxWidth } }}>
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
