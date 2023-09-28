// import logo from './logo.svg';
import React from 'react';
import './login.css';

function Login(props) {

  return (props.trigger) ? (
    <div className='popup'>
      Login Works!!
    </div>
  ) :"";
}

export default Login;
