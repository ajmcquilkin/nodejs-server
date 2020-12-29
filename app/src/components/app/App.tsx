import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

const Homepage = React.lazy(() => import('../homepage'));
const AdamComponent = React.lazy(() => import('../adamComponent'));
const OtherComponent = React.lazy(() => import('../otherComponent'));

const Fallback: React.FC = () => (
  <div>Page not found!</div>
);

interface AppProps {
  
}

const App: React.FC<AppProps> = ({}: AppProps) => (
  <div className="App">
    <Router basename="/app">
      {/* TODO: Reference package.json */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/adam" component={AdamComponent} />
          <Route path="/other" component={OtherComponent} />
          <Route component={Fallback} />
        </Switch>
      </React.Suspense>
    </Router>
  </div>
);

export default App;
