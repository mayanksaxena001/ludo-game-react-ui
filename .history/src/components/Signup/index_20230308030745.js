// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../service/http-client.service';
import { setToken } from '../../service/storage.service';
function Signup(props) {
  let navigate = useNavigate();
  const [fetchData, setFetch] = useState(false);
  const [data, setData] = useState({ name: name, username: username, password: password });
  const [name, setName] = useState('test222');
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(() => {
    console.log('Inside signup useEffect..');
    if (fetchData) {
      async function saveData() {
        const payload = {
          method: 'POST',
          body: JSON.stringify({ name: name, username: username, password: password }),
        };
        let response = await axiosInstance.post('/api/auth/signup', payload);
        if (response) setToken(response.token)
        setFetch(false);
      }
      saveData();
    }
  }, [fetchData]);

  const register = () => {
    console.log('Signup clicked..');
    setFetch(true);
    goToDashboard();
  }
  const goToDashboard = () => {
    navigate('/dashboard');
  }
  return (
    <div className='signup'>
      <form className='form'>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => register()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
