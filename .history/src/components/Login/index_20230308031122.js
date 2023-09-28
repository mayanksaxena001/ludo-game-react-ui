// import logo from './logo.svg';
import React from 'react';
import Popup from 'reactjs-popup';
import './login.css';

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../service/http-client.service';
import { setToken } from '../../service/storage.service';
function Login(props) {
  let navigate = useNavigate();
  const [fetchData, setFetch] = useState(false);
  const [data, setData] = useState({ username: username, password: password });
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(() => {
    console.log('Inside login useEffect..');
    if (fetchData) {
      //TODO move it to seperate service..
      async function saveData() {
        const payload = {
          method: 'POST',
          body: JSON.stringify({ username: username, password: password }),
        };
        let response = await axiosInstance.post('/api/auth/login', payload);
        if (response) setToken(response.token)
        setFetch(false);
      }
      saveData();
    }

  }, []);
  const login = () => {
    console.log('Login clicked..');
    setFetch(true);
    goToDashboard();
  }
  const goToDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <div className='login'>
      <form>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => login()}>Login</button>
      </form>
    </div>
  );
}

export default Login;
