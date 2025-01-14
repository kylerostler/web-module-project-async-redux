import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import facts  from './state/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(facts, {}, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
