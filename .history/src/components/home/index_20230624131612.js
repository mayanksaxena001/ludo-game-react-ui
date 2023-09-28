import { Box } from '@material-ui/core';
import React from 'react';
// import logo from './logo.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import logo_1 from '../../assets/3d.svg';
import './home.css';

function Home() {
  let navigate = useNavigate();
  const { token } = useSelector(state => state.auth);

  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  // console.log('isMobile',isMobile);

  useEffect(() => {
    //TODO  check for conditions
    if (token) navigate('/dashboard');
  }, []);
  //   let audio = new Audio("/clubbedtodeath.mp3")
  // audio.play();

  const goToLoginPage = () => {
    // setLoginEnabled(true);
    navigate('/login');
  }

  const goToSignupPage = () => {
    // setLoginEnabled(true);
    navigate('/signup');
  }

  const header = <header className='App-header'>
    <h1>CLUB X</h1>
  </header>;
  const img_spin = <img width='100%' height='100%' src={logo_1} className="App-logo" alt="logo" />;


  return (
    <div className="home">
       <Confetti numberOfPieces={150} width={width} height={height} />
      <div className='home-top'>
        {header}
      </div>
      <div className='home-background'>
        {img_spin}
      </div>

      <div className='home-box'>
        <Box className="box active" onClick={goToLoginPage}>Login</Box>
        <Box className="box active" onClick={goToSignupPage}>Signup</Box>
      </div>


    </div>
  );
}

export default Home;
