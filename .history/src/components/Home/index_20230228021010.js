import React from 'react';
// import logo from './logo.svg';
import logo_1 from '../../images/3d.svg';
import './home.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Login from '../Login';

function Home() {
  let navigate = useNavigate();
  const [loginEnabled,setLoginEnabled] = useState(false);
  const [appState, changeState] = useState({
    activeobject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  })

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  useEffect(() => {
    let id = setInterval(() => {
      let index = randomIntFromInterval(0, 3);
      toggleActive(index);
      toggleActiveStyle(index);
    }, 500);
    return () => {
      clearInterval(id);
    }
  });
  //   let audio = new Audio("/clubbedtodeath.mp3")
  // audio.play();


  const toggleActive = (index) => {
    changeState({ ...appState, activeobject: appState.objects[index] })
  }
  const goToHome = () => {
    toggleActive(1);
    setLoginEnabled(true);
    // navigate('/home');
    // PopupExample();
  }
  const goToApp = () => {
    toggleActive(2);
    navigate('/');
  }

  const goToGameBoard = () => {
    toggleActive(2);
    PopupExample();
    navigate('/game');
  }
  const toggleActiveStyle = (index) => {
    if (appState.objects[index] === appState.activeobject) {
      return "box active"
    } else return "box inactive"
  }

  const PopupExample =  () => (
    <Popup  position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );
  const header = <header className='App-header'>
    <h1>CLUB X</h1>
  </header>;
  const img_spin = <img width='100%' height='100%' src={logo_1} className="App-logo" alt="logo" />;
  return (
    <div className="home">
      <div className='home-bottom'>
        {header}
      </div>
      <div className='home-background'>
        {img_spin}
      </div>

      <div className='home-box'>
        <div className={toggleActiveStyle(2)} onClick={goToHome}>Login</div>
        <div className={toggleActiveStyle(2)} onClick={goToApp}>Signup</div>
        <div className={toggleActiveStyle(3)} onClick={goToGameBoard}>Game Board
        <Login trigger={loginEnabled} />
        </div>
        {/* <div className={toggleActiveStyle(3)} onClick={() => toggleActive(3)}></div>
          <div className={toggleActiveStyle(4)} onClick={() => toggleActive(4)}></div> */}
      </div>


      {/* <div>
        {appState.objects.map((element, index) => {
          <div key={index} className={toggleActiveStyle(index)} onClick={() => toggleActive(index)} >
          </div>
        })}
      </div> */}
    </div>
  );
}

export default Home;
