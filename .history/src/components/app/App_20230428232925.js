// import logo from './logo.svg';
import React from 'react';
import Home from '../home';
import './App.css';

class App extends React.Component {
  componentWillUnmount() {
    //Put your Code in here
  }

  componentDidMount(){
    console.log('home component mounted..');
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
