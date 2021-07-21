import React from 'react';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product/"/>
        <Detail path="/product/:id"/>

      </Router>
    </div>
  );
}

export default App;
