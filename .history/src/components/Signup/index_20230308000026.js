// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';

function Signup() {
  const [fetchData, setFetch] = useState(false);

  useEffect(() => { }, []);

  return (
    <div className='signup'>
      <form>
        <input ></input>
        <input></input>
        <input></input>
        <button></button>
      </form>
    </div>
  );
}

export default Signup;
