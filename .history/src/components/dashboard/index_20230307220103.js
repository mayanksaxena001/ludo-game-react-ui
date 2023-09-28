// import logo from './logo.svg';
import React from 'react';
// import Popup from 'reactjs-popup';
import './dashboard.css';


function Dashboard(props) {

  return (
    <div className='dashboard'>
      {/* <Popup trigger={props.trigger}/> */}
      <div className='home-box'>
        <div className={toggleActiveStyle(2)} onClick={goToDashboard}>Login</div>
        <div className={toggleActiveStyle(3)} onClick={goToSignupPage}>Signup</div>
      </div>
    </div>
  );
}

export default Dashboard;
