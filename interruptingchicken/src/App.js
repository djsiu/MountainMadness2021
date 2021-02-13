import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
//import './Tut.css';
import PopBtn from './PopBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PopBtn />
    </div>
    
  );
}
export default App;
