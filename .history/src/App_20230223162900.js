import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [appState, changeState] = useState({
    activeobject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  })


  const toggleActive = (index) => {
    changeState({ ...appState, activeobject: appState.objects[index] })
  }
  const toggleActiveStyle = (index) => {
    if (appState.objects[index] === appState.activeobject) {
      return "box active"
    } else return "box inactive"
  }

  const header = <header className='App-header'>
    <h1>CLUB X</h1>
  </header>;
  const img_spin = <img width='100%' height='100%' src={logo} className="App-logo" alt="logo" />;
  return (
    <div className="App">
      <div className='home-background'>
        {img_spin}
      </div>
      {header}
    <div className='home-box'>
      <div className={toggleActiveStyle(1)} onClick={()=>toggleActive(1)}></div>
    </div>
      
      <div>
        {appState.objects.map((element, index) => {
          <div key={index} className={toggleActiveStyle(index)} onClick={() => toggleActive(index)} >
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
