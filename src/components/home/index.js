import React, { useState } from 'react';
import { Avatar, Box, Button, Icon } from '@material-ui/core';
import { Stack } from '@mui/system';
// import logo from './logo.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {
  let navigate = useNavigate();
  const { token } = useSelector(state => state.auth);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const BackgroundSound = "/audio/clubbedtodeath.mp3";
  const ButtonClickSound = "/audio/click.mp3";

  //TODO : from state
  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  // console.log('isMobile',isMobile);

  useEffect(() => {
    //TODO  check for conditions
    if (token) navigate('/dashboard');
    return () => {
    }
  }, []);

  const loginHandler = () => {
    // setLoginEnabled(true);
    navigate('/login');
  }

  const signUphandler = () => {
    // setLoginEnabled(true);
    navigate('/signup');
  }

  const handleMouseEnter = () => {
    if (!isButtonHovered) {
      playSound();
      setIsButtonHovered(true);
    }
  }

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const playSound = () => {
    let audio = new Audio(ButtonClickSound);
    audio.play();
  }

  // const header = <header className='App-header'>
  //   <h1>CLUB X</h1>
  // </header>;
  const img_spin = <img width='100%' height='100%' src='/img/2.gif' alt="logo" />;


  return (
    <div className="home">
      {/* <div className='home-top'>
        {header}
      </div> */}
      <div className='home-background'>
        {img_spin}
      </div>
      <div className='home-box'>
        <Stack direction="row">
          <Button size="large" variant="outlined" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} onClick={() => loginHandler()}>{<Avatar src={'/img/right-arrow.png'} />}</Button>
          <Button size="large" variant='outlined' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} onClick={() => signUphandler()}>Register</Button>
        </Stack>
      </div>


    </div>
  );
}

export default Home;
