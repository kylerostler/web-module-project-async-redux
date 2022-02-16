import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './components/App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import factsReducer  from './state/reducer'

const store = createStore(factsReducer)


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
