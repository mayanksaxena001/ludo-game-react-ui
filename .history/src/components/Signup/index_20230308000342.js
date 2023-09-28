// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';

function Signup() {
  const [fetchData, setFetch] = useState(false);

  useEffect(() => { }, []);

  return (
    <div className='signup'>
      <form >
        <input placeholder='Name'></input>
        <input > </input>
        <input></input>
        <button>Update  </button>
      </form>
    </div>
  );
}

export default Signup;
