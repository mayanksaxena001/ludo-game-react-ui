// import logo from './logo.svg';
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import Home from '../home';
import './App.css';

class App extends React.Component {
  componentWillUnmount() {
    //Put your Code in here
  }

  componentDidMount() {
    console.log('app component mounted..');
  }
  render() {
    return (<>
      <CssBaseline />
        <Home />
    </>
    );
  }
}

export default App;
