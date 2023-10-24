// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import Home from '../../components/home';
import Banner from '../../components/banner';
const AppHome = () => {
    const [isVisible, setIsVisible] = useState(true);
    const entranceThemeSound = "/audio/bomb.mp3";

    const playSound = () => {
        let audio = new Audio(entranceThemeSound);
        audio.play();
        return audio;
      }

    useEffect(() => {
        const audio = playSound();
        // Simulate loading or wait for some event
        setTimeout(() => {
            setIsVisible(false);
            audio.pause();
        }, 4000); // Adjust the time as needed

        return ()=>{audio.pause();}
    }, []);

    return <>
        <CssBaseline />
        {isVisible ? <Banner/> :
            <Home />
        }
    </>
}

export default AppHome;
