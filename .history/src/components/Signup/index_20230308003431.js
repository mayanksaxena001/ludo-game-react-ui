// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../service/http-client.service';

function Signup() {
  const [fetchData, setFetch] = useState(false);
  const [name, setName] = useState('test222');
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(() => {
    console.log('Inside useeffect..');
    if (fetchData) {
      const payload = {
        method: 'POST',
        body: JSON.stringify({ name: name, username: username, password: password }),
      };
      axiosInstance.post('/api/auth/signup', payload)
        .then((res) => setData(res.data.id));
    }
  }, []);

  const register = () => {
    console.log('Signup clicked..');
    setFetch(true);
  }
  return (
    <div className='signup'>
      <form >
        <input placeholder='Name'></input>
        <input placeholder='Username'></input>
        <input placeholder='Password' type='password'></input>
        <button onClick={() => register()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
