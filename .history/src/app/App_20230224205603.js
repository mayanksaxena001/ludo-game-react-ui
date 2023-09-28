// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='home-bottom'>
        {header}
      </div>
      <div className='home-background'>
        {img_spin}
      </div>

      <div className='home-box'>
        <div className={toggleActiveStyle(1)} onClick={() => toggleActive(1)}></div>
        <div className={toggleActiveStyle(2)} onClick={() => toggleActive(2)}></div>
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

export default App;
