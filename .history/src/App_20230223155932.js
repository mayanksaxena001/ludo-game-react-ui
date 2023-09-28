import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [aapState, changeState] = useState[{
    activeobject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  }]


  function toggleState(index){
    changeState([{id:index}])
  }
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
      <div>
        {aapState.objects.map((elements, index) => {
          <div key={index} className='box inactive' onClick={toggleState(index)} >

          </div>
        })}
      </div>
    </div>
  );
}

export default App;
