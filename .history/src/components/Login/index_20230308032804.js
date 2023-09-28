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
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(() => {
    // data fetching here
    //    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //  .then(response => response.json())
    //  .then(data => console.log(data));

    console.log('Inside login useEffect..');
    if (fetchData) {
      //TODO move it to seperate service..
      let body = JSON.stringify({ username: username, password: password });
      const login_url = process.env.REACT_APP_BASE_API_URL + '/api/auth/login';
      fetch(login_url, { method: 'POST', body: body }).then(response => response.json()).then(data => {
        if (data) setToken(data.token)
        console.log(data);
      });
      setFetch(false);
    }

  }, [fetchData]);
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
