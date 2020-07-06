import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './store';

import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

/**
 * Type-safe check to see if window contains "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" function key
 */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

/**
 * Create redux store with rootReducer and apply thunk and history middleware
 */
const store = createStore(
  createRootReducer(), {},
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

/**
 * Allow the react app to access this store
 */
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
