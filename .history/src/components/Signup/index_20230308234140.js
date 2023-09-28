// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { setToken } from '../../service/storage.service';
import { signup } from '../../service/auth..service';
function Signup(props) {
  let navigate = useNavigate();
  const [fetchData, setFetch] = useState(false);
  const [name, setName] = useState('test222');
  const [username, setUsername] = useState('test22');
  const [password, setPassword] = useState('test22');

  useEffect(() => {
    console.log('Inside signup useEffect..');
    console.log('checking login..');
    //TODO move it to seperate service..
  }, [fetchData]);

  const handleSignup = () => {
    console.log('Signup clicked..');
    let data = { name: name, username: username, password: password };
    signup(data)
      .then(data => {
        if (data) {
          setToken(data.token)
          console.log(data);
          setFetch(false);
          navigate('/dashboard');
        }
      }).catch((err) => {
        console.log(err);
        alert('Signup Failure..');
      });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit} >
        <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button block="true" size="lg" type="submit" onClick={() => handleSignup()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
