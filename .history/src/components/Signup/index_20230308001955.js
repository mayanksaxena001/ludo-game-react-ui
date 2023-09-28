// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';

function Signup() {
  const [fetchData, setFetch] = useState(false);

  useEffect(() => {
    console.log('Inside useeffect..');
   }, []);

  const register = ()=>{
    console.log('Signup clicked..');
  }
  return (
    <div className='signup'>
      <form >
        <input placeholder='Name'></input>
        <input placeholder='Username'></input>
        <input placeholder='password' type='password'></input>
        <button onClick={()=>register()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
