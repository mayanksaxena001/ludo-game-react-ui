import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LudoGame from '../containers/GameContainer';
import Login from '../containers/LoginContainer';
import Signup from '../containers/SignupContainer';
import Dashboard from '../containers/DashboardContainer';
import NotFound from '../containers/ErrorContainer';
import AppHome from '../containers/HomeContainer';
import { Provider } from 'react-redux';
import store from '../store';


export function router() {

  return <Provider store={store}>
    <Router>
      <Routes >
          <Route path="/" element={<AppHome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/game" element={<LudoGame />} />
      </Routes>
    </Router>
  </Provider>
}
