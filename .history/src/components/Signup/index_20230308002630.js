// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';

function Signup() {
  const [fetchData, setFetch] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Inside useeffect..');
    console.log(name);
    console.log(username);
    console.log(password);
  }, []);

  const register = () => {
    console.log('Signup clicked..');
    setFetch(true);
  }
  return (
    <div className='signup'>
      <form >
        <input value={name} placeholder='Name'></input>
        <input value={username} placeholder='Username'></input>
        <input value={password} placeholder='Password' type='password'></input>
        <button onClick={() => register()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
