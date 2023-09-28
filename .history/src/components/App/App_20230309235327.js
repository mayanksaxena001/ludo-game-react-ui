// import logo from './logo.svg';
import React from 'react';
import Home from '../Home';
import './App.css';

class App extends React.Component {
  componentWillUnmount() {
    //Put your Code in here
  }
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    );
  }
}

export default App;
