// import logo from './logo.svg';
import React from 'react';
// import Popup from 'reactjs-popup';
import './dashboard.css';


function Dashboard(props) {

    const joinGame = () => {

      }
const createGame = () => {
        
      }

  return (
    <div className='dashboard'>
      {/* <Popup trigger={props.trigger}/> */}
      <div className='home-box'>
        <div className="box active" onClick={joinGame()}>Join Game</div>
        <div className="box active" onClick={createGame()}>Create Game</div>
      </div>
    </div>
  );
}

export default Dashboard;
