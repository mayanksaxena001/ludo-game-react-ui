// import logo from './logo.svg';
import { Button } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../reducers/authSlice';
import { fetchUser } from '../../reducers/userSlice';
import { motion } from "framer-motion/dist/framer-motion";
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('inside login use effect')
    if (token) navigate('/dashboard');
    if (error) {
      setUsername('');
      setPassword('');
    }
  }, [loading, error]);

  const handleOnLogin = () => {
    console.log('Login clicked..');
    let data = { username: username, password: password };
    dispatch(loginUser(data));
    // dispatch(fetchUser());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  const Spinner = () => <div className="loader"></div>;
  const content = loading ? <Spinner /> : (
    <div className='login'>
      <motion.div
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <form onSubmit={handleSubmit}>
          {error ? <p className={error ? "errorMsg" : "offscreen"} style={{ color: 'red' }} aria-live="assertive"> {error}</p> : ''}
          <input
            placeholder='username'
            id="username"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required />
          <input
            placeholder='password'
            id="password"
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <Button disabled={username == '' || password == ''} block="true" size="large" type="submit" onClick={() => handleOnLogin()}>Login</Button>
        </form>
      </motion.div>
    </div>
  );
  return content;
}

export default Login;
