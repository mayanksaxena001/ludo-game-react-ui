// import logo from './logo.svg';
import React from 'react';
import './signup.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import StorageService from '../../service/storage.service';
import AuthService from '../../service/auth.service';
import { handleSignup } from '../../actions';
import { useSelector } from 'react-redux';
import { signupUser } from '../../reducers/authSlice';
function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('inside signup use effect');
    const token = StorageService.getToken();
    if (token) navigate('/dashboard');
    if (error) alert('Login Failed');
    if (error) {
      setName('');
      setUsername('');
      setPassword('');
      alert(error);
    }
  }, [loading, error]);

  const handleOnSignup = () => {
    console.log('Signup clicked..');
    let data = { name: name, username: username, password: password };
    dispatch(signupUser(data));
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
        <button block="true" size="lg" type="submit" onClick={() => handleOnSignup()}>Signup</button>
      </form>
    </div>
  );
  return content;
}

export default Signup;
