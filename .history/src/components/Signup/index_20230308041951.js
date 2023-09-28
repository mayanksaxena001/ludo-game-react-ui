// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { setToken } from '../../service/storage.service';
function Signup(props) {
  let navigate = useNavigate();
  const [fetchData, setFetch] = useState(false);
  const [name, setName] = useState('test222');
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(() => {
    console.log('Inside signup useEffect..');
    if (fetchData) {
      console.log('checking login..');
      //TODO move it to seperate service..
      let body = { name: name, username: username, password: password };
      const signup_url = process.env.REACT_APP_BASE_API_URL + '/api/auth/signup';
      fetch(signup_url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        .then(response => {
          // console.log('Response ',response);
          return response.json();
        })
        .then(data => {
          if (data) {
            setToken(data.token)
            console.log(data);
            setFetch(false);
            navigate('/dashboard');
          }
        }).catch((err) => {
          console.log(err);
          alert('Login Failure..');
        });

    }
  }, [fetchData]);

  const register = () => {
    console.log('Signup clicked..');
    setFetch(true);
  }
  return (
    <div className='signup'>
      <form >
        <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={() => register()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
