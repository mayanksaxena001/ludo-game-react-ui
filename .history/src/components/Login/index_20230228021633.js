// import logo from './logo.svg';
import React from 'react';
import Popup from 'reactjs-popup';
import './login.css';


function Login(props) {

  return (
    <div className='popup'>
      <Popup trigger={props.trigger}></Popup>
      Login Works!!
    </div>
  );
}

export default Login;