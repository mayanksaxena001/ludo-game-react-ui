// import logo from './logo.svg';
import React from 'react';
import Popup from 'reactjs-popup';
import './login.css';


function Login(props) {

  return (
    <div className='login'>
      <Popup trigger={props.trigger}/>
      Login Works!!
    </div>
  );
}

export default Login;