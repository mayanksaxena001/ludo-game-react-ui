// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';

function Signup() {
  const [fetchData, setFetch] = useState(false);

  useEffect(()=>{},[]);

  return (
    <div className='signup'>
    <Popup  className='popup'/>
  </div>
  );
}

export default Signup;
