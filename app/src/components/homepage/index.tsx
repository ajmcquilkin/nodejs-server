import React from 'react';
import { Link as Link } from 'react-router-dom';
import logo from './logo.svg';

const Homepage: React.FC = () => (
  <header className="App-header">
    <Link to="/adam">Adam</Link>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit
      {' '}
      <code>src/App.tsx</code>
      {' '}
      and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React - Test 1
    </a>
  </header>
);

export default Homepage;
