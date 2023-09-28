// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import Popup from 'reactjs-popup';

function Signup() {
  const [fetchData, setFetch] = useState(false);

  return (
    <div className='signup'>
    <Popup  className='popup'/>
  </div>
  );
}

export default Signup;
