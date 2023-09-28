// import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signupUser } from '../../reducers/authSlice';
import { fetchUser } from '../../reducers/userSlice';
import './signup.css';
function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('inside signup use effect');
    if (token) navigate('/dashboard');
    if (error) {
      setName('');
      setUsername('');
      setPassword('');
    }
  }, [loading, error]);

  const handleOnSignup = async() => {
    console.log('Signup clicked..');
    let data = { name: name, username: username, password: password };
     dispatch(signupUser(data));
    dispatch(fetchUser());
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const Spinner = () => <div className="loader"></div>;
  const content = loading ? <Spinner /> : (
    <div className='signup'>
      <form onSubmit={handleSubmit} >
        {error ? <p className={error ? "errorMsg" : "offscreen"} style={{ color: 'red' }} aria-live="assertive"> {error}</p> : ''}
        <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
        <button disabled={username == '' || name == '' || password == ''} block="true" size="lg" type="submit" onClick={() => handleOnSignup()}>Signup</button>
      </form>
    </div>
  );
  return content;
}

export default Signup;
