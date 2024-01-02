// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Gamified = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to the Gaming Site!</h1>
      <p>Explore and enjoy our collection of games.</p>
    </div>
  );
};

export default Gamified;
