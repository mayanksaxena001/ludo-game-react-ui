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
  const [name, setName] = useState('test222');
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(()=>{},[]);
  return (
    <div className='login'>
      <form className='form'>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => register()}>Signup</button>
      </form>
    </div>
  );
}

export default Login;
