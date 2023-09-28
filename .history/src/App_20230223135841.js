import logo from './logo.svg';
import './App.css';

function App() {
  const newLocal = <header className='App-header'>
    <h>App Header</h>
  </header>;
  const newLocal_1 = <img width='100%' height='100%' src={logo} className="App-logo" alt="logo" />;
  return (
    <div className="App">
      <div className='home-background'>
        {newLocal_1}
      </div>
      <div>
      {newLocal}
      </div>
    </div>
  );
}

export default App;
