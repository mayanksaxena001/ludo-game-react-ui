import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import App from './components/App/App';
import GameBoard from './components/GameBoard';

const NotFound = () => (
  <div className="center-all">
    <div>Page Not Found</div>
    <div>
      Return to&nbsp;
      <Link to="/">Home</Link>
    </div>
  </div>
);

const AppHome = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route path="/game" element={<GameBoard/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHome />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
