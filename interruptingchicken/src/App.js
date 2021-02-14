import './App.css';

import React from 'react';

import TypingPage from './tabs/TypingPage/TypingPage'
import Timer from './Components/Timer'

import Music from './Components/backgroundnoise'

function App() {
  return (
    <div>
      <TypingPage/>
      <Music/>
    </div>
  );
}

export default App;
