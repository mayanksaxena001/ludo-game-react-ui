// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import StorageService from '../../service/storage.service';
import AuthService from '../../service/auth..service';
import { handleSignup } from '../../actions';
function Signup(props) {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector(state => state.auth);
  useEffect(() => {
    const token = StorageService.getToken();
    if (token) navigate('/dashboard');
  }, []);

  const handleOnSignup = () => {
    console.log('Signup clicked..');
    let data = { name: name, username: username, password: password };
    handleSignup(data);
    AuthService.signup(data)
      .then(data => {
        if (data) {
          StorageService.setToken(data.token)
          console.log(data);
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
        <button block="true" size="lg" type="submit" onClick={() => handleOnSignup()}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
