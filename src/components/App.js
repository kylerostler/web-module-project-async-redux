import React from 'react';
import '../App.css';
import * as actionCreators from '../state/action-creators'
import CatFacts from './CatFacts';

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <div>
        <CatFacts />
      </div>
    </div>
  );
}

export default App;