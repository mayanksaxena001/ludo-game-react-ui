import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import App from './components/App/App';
import LudoGame from './components/Game';
import { NotFound } from './index';

export function router() {
  return <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/game" element={<LudoGame />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>;
}
