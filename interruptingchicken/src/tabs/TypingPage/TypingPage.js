//import logo from '../../logo.svg';
import logo_chick from '../../chickens/white-chick.png'
import './TypingPage.css';
import {generate} from '../../utils/words'
import useKeyPress from '../../hooks/useKeyPress'
import React, {useState} from 'react';
import Popup from '../../Popup';
import Timer from '../../Components/Timer';
// import Timer from '../../Components/Timer2';
import useSound from 'use-sound';
import chickenBok from '../../sounds/chickenBok.mp3';
import chick1 from '../../chickens/black-chick.png';
import chick2 from '../../chickens/staring-chick.png';
import chick3 from '../../chickens/broiler-chick.png';

var index = 0;
var chick_index = 0;

function TypingPage() {
  var keyWords = [
    "cluck",
    "bok",
    "egg",
    "chicken",
    "hen"
  ];

  var chicks = [
    chick1,
    chick2,
    chick3
  ]

  let initialWords = generate()

  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1))
  const [currentCharCorrect, setCurrentCharCorrect] = useState(true);
  const [popupFlag, setPopupFlag] = useState(false);
  const soundUrl = '/sounds/chickenBok.mp3';
  const [play] = useSound(soundUrl);
  const [startTyping, setStartTyping] = useState(false);

  function toggleVars() {
    setPopupFlag(!popupFlag);
  }

  function restart() {
    initialWords = generate();

    setOutgoingChars('');
    setStartTyping(!startTyping);
    setCurrentChar(initialWords.charAt(0));
    setIncomingChars(initialWords.substr(1));
    setCurrentCharCorrect(true);
    setPopupFlag(false);
  }

  useKeyPress(key => {
    //1

    if (startTyping == false) {
      setStartTyping(true);
    }
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
      if(!popupFlag) {
        index = Math.floor(Math.random()*keyWords.length);
        chick_index = Math.floor(Math.random()*chicks.length);
      }
      setPopupFlag(true);
      setCurrentCharCorrect(false);
      play();
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
      {popupFlag ? <Popup text={keyWords[index]} closePopup={toggleVars} chick={chicks[chick_index]}/> : null}
      <Timer start={startTyping} restart={restart}/>
    </div>
  );
}

export default TypingPage;