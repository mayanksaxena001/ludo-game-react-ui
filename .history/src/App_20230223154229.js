import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [aapState,changeAppState] = useState[{
    activeobject:null
  }]
  const header = <header className='App-header'>
    <h>App Header</h>
  </header>;
  const img_spin = <img width='100%' height='100%' src={logo} className="App-logo" alt="logo" />;
  return (
    <div className="App">
      <div className='home-background'>
        {img_spin}
      </div>
      {header}
    </div>
  );
}

export default App;
