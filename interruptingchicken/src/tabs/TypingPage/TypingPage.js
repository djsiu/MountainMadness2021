//import logo from '../../logo.svg';
import logo_chick from '../../chickens/white-chick.png'
import './TypingPage.css';
import {generate} from '../../utils/words'
import useKeyPress from '../../hooks/useKeyPress'
import React, {useState} from 'react';
import Popup from '../../Popup2'
import Timer from '../../Components/Timer';


function TypingPage() {

  const initialWords = generate()

  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1))
  const [currentCharCorrect, setCurrentCharCorrect] = useState(true);
  const [popupFlag, setPopupFlag] = useState(false);

  function toggleVars() {
    setPopupFlag(!popupFlag);
  }

  useKeyPress(key => {

    //1
    setCurrentCharCorrect(true);

    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    
    //2
    if (key === currentChar && !popupFlag) {
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
      setPopupFlag(true);
      setCurrentCharCorrect(false);
    }
  });

  return (
    <div className="TypingPage">
      <header className="TypingPage-header">
        <img src={logo_chick} className="TypingPage-logo" alt="logo" />
        <p className="Character">
          <span className="Character-out">
            {(leftPadding + outgoingChars).slice(-20)}
          </span>
          {currentCharCorrect ? <span className="Character-current">{currentChar}</span> : <span className="Character-current-incorrect">{currentChar}</span>}
          <span>{incomingChars.substr(0, 20)}</span>
        </p>
      </header>
      {popupFlag ? <Popup text='end me' closePopup={toggleVars}/> : null}
    </div>
  );
}

export default TypingPage;