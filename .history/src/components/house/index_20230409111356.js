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
    console.log(player);
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
    if (player.active && player.player_turn == data.player_turn) return <ProgressBar key={id} bgcolor={color} handleTimeOut={handleTimeOut} data={data} color={color} />
  }

  const playerName = () => {
    if (player !== undefined && player.username !== undefined) return player.username;
    return '';
  }
  return (
    <div disabled={isDisabled} className={getHouseClass()} style={{ borderColor: color, height: { height }, minHeight: { minHeight_ }, maxHeight: { maxHeight }, width: { width }, minWidth: { minWidth_ }, maxWidth: { maxWidth } }}>
      <div className='tokens'>
        <Token disabled={isDisabled} player={player} color={color} handleTokenMove={handleTokenMove} id={1} value={id} minheight={height} minWidth={width} data={data} />
        <Token disabled={isDisabled} player={player} color={color} handleTokenMove={handleTokenMove} id={2} value={id} minheight={height} minWidth={width} data={data} />
      </div>
      <div className='tokens'>
        <Token disabled={isDisabled} player={player} color={color} handleTokenMove={handleTokenMove} id={3} value={id} minheight={height} minWidth={width} data={data} />
        <Token disabled={isDisabled} player={player} color={color} handleTokenMove={handleTokenMove} id={4} value={id} minheight={height} minWidth={width} data={data} />
      </div>
      <h1>
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
