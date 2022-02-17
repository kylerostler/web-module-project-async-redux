import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './components/App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import facts  from './state/reducer'

const store = createStore(facts)


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
