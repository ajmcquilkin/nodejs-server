import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

const Homepage: React.FC = () => (
  <header className="App-header">
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

const AdamComponent: React.FC = () => (
  <div>Adam&apos;s component!</div>
);

const OtherComponent: React.FC = () => (
  <div>Other component!</div>
);

const Fallback: React.FC = () => (
  <div>Page not found!</div>
);

const App: React.FC = () => (
  <div className="App">
    <Router basename="/app">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/adam" component={AdamComponent} />
        <Route path="/other" component={OtherComponent} />
        <Route component={Fallback} />
      </Switch>
    </Router>
  </div>
);

export default App;
