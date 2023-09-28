// import logo from './logo.svg';
import React from 'react';
import './login.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import StorageService from '../../service/storage.service';
import AuthService from '../../service/auth..service';
class Login extends React.Component {
  componentWillUnmount() {
    //Put your Code in here
  }
  componentDidMount() {}
  
  
  handleLogin = () => {
    useEffect(() => {
      const token = StorageService.getToken();
      if (token) navigate('/dashboard');
    }, []);
    console.log('Login clicked..');
    let data = { username: username, password: password };
    const login_url = process.env.REACT_APP_BASE_API_URL + '/api/auth/login';
    AuthService.login(data).then(data => {
      if (data) {
        StorageService.setToken(data.token)
        navigate('/dashboard');
      }
    }).catch((err) => {
      alert('Login Failure..');
      console.log(err);
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <input placeholder='Username' onChange={(e) => this.setUsername(e.target.value)}></input>
          <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button block="true" size="lg" type="submit" onClick={() => this.handleLogin()}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
