// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import Popup from 'reactjs-popup';

function Signup() {

  return (
    <div className='signup'>
    <Popup trigger={props.trigger}/>
    Login Works!!
  </div>
  );
}

export default Signup;
