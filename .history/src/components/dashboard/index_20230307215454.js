// import logo from './logo.svg';
import React from 'react';
import Popup from 'reactjs-popup';
import './dashboard.css';


function Dashboard(props) {

  return (
    <div className='popup'>
      <Popup trigger={props.trigger}/>
      Dashboard Works!!
    </div>
  );
}

export default Dashboard;
