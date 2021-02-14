import logo from './logo.svg';
import './TypingPage.css';
import {generate} from './utils/words'
import useKeyPress from './hooks/useKeyPress'
import React, {useState} from 'react';


function TypingPage() {

  const initialWords = generate()

  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1))
  const [currentCharCorrect, setCurrentCharCorrect] = useState(true);


  useKeyPress(key => {
    //1
    setCurrentCharCorrect(true);

    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    
    //2
    if (key === currentChar) {
      //3
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);
      
      //5      
      setCurrentChar(incomingChars.charAt(0));
      
      //6
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars +=' ' + generate();
      }
      setIncomingChars(updatedIncomingChars);
    } else {
      setCurrentCharCorrect(false);
    }
  });

  return (
    <div className="TypingPage">
      <header className="TypingPage-header">
        <img src={logo} className="TypingPage-logo" alt="logo" />
        <p className="Character">
          <span className="Character-out">
            {(leftPadding + outgoingChars).slice(-20)}
          </span>
          {currentCharCorrect ? <span className="Character-current">{currentChar}</span> : <span className="Character-current-incorrect">{currentChar}</span>}
          <span>{incomingChars.substr(0, 20)}</span>
        </p>
        <a
          className="TypingPage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default TypingPage;