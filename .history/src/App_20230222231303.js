import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ludo Game Header!
        </p>
      </header>
      <body className='App-body'>
        <p>
          Ludo Game Body!
        </p>
      </body>
      <footer>
        <p>
          Ludo Game Footer!
        </p>
      </footer>
    </div>
  );
}

export default App;
