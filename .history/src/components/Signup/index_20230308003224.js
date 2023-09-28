// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../service/http-client.service';

function Signup() {
  const [fetchData, setFetch] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Inside useeffect..');
    if (fetchData) {
      const payload = {
        method: 'POST',
        body: JSON.stringify({ title: val }),
      };
      axiosInstance.post('https://jsonplaceholder.typicode.com/posts', payload)
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
