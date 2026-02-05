// import logo from './logo.svg';
import { Button } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../reducers/authSlice';
import './login.css';
import { CSSTransition } from 'react-transition-group';
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
  }, [navigate,loading, error]);

  const handleOnLogin = () => {
    console.log('Login clicked..');
    let data = { username: username, password: password };
    dispatch(loginUser(data));
    // dispatch(fetchUser());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const signUphandler = () => {
    // setLoginEnabled(true);
    navigate('/signup');
  }

  const NewWindow=()=>{
    return <>
    {/* <div class="loader" disabled={loading}></div> */}
    <div class="container">
      <div class="login-form">
        <div>
        <input
          placeholder='username'
          id="username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          required />
        </div>
        <div>
        <input
          placeholder='password'
          id="password"
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
        </div>
        <div class="btn-right">
        <button disabled={username === '' || password === ''} block="true" size="large" type="submit" onClick={() => handleOnLogin()}>Login
            </button>
        </div>
        <div class="btn-right">
          <button class="buttonlink" onClick={() => signUphandler()}>Sign Up
            <span>
              <img src="/img/arrow_dark.svg" />
            </span>
          </button>
        </div>
      </div>
    </div>
    </>
  }

  const Spinner = () => <div className="loader"></div>;
  const content = loading ? <Spinner /> : <NewWindow/>;
  //  (
  //   <div className='login'>
  //     <form onSubmit={handleSubmit}>
  //       {error ? <p className={error ? "errorMsg" : "offscreen"} style={{ color: 'red' }} aria-live="assertive"> {error}</p> : ''}
  //       <input
  //         placeholder='username'
  //         id="username"
  //         value={username}
  //         type="text"
  //         onChange={(e) => setUsername(e.target.value)}
  //         autoComplete="off"
  //         required />
  //       <input
  //         placeholder='password'
  //         id="password"
  //         value={password}
  //         type='password'
  //         onChange={(e) => setPassword(e.target.value)}
  //         autoComplete="off"
  //         required
  //       />
  //       <Button disabled={username == '' || password == ''} block="true" size="large" type="submit" onClick={() => handleOnLogin()}>Login</Button>
  //     </form>
  //   </div>
  // );
  
  return <>
    <CSSTransition
      in={true}
      timeout={2000}
      classNames="fade"
      unmountOnExit
      appear
      enter = {false}
    >{content}
    </CSSTransition>
  </>
 
}

export default Login;
