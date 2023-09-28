// import logo from './logo.svg';
import React from 'react';
// import Popup from 'reactjs-popup';
import './dashboard.css';


function Dashboard(props) {

    const toggleActiveStyle = (index) => {
        if (appState.objects[index] === appState.activeobject) {
          return "box active"
        } else return "box inactive"
      }
      
  return (
    <div className='dashboard'>
      {/* <Popup trigger={props.trigger}/> */}
      <div className='home-box'>
        <div className={joinRoom()} onClick={goToDashboard}>join Game</div>
        <div className={toggleActiveStyle(3)} onClick={goToSignupPage}>Signup</div>
      </div>
    </div>
  );
}

export default Dashboard;
