import logo from '../../logo.svg';
import './TypingPage.css';
import {generate} from '../../utils/words'
import useKeyPress from '../../hooks/useKeyPress'
import React, {useState} from 'react';
import Popup from '../../Popup'


function TypingPage() {

  const initialWords = generate()

  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1))
  const [currentCharCorrect, setCurrentCharCorrect] = useState(true);
  const [randomVar, setRandomVar] = useState(false);

  function toggleVar() {
    setRandomVar(!randomVar);
  }

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
      setRandomVar(true);
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
      </header>
      {randomVar ? <Popup text='end me' closePopup={toggleVar}/> : null}
    </div>
  );
}

export default TypingPage;


// class TypingPage extends React.Component {
//   constructor(props) {
//     super(props);

//     const initialWords = generate();

//     this.state = {
//       leftPadding: new Array(20).fill(' ').join(''),
//       rightPadding: new Array(20).fill(' ').join(''),
//       outgoingChars: '',
//       setOutgoingChars: '',
//       incomingChars: initialWords.charAt(0),
//       setCurrentChar: initialWords.charAt(0),
//       incomingChars: initialWords.substr(1),
//       setIncomingChars: initialWords.substr(1)
//     }
//   } 

//   handleTyping() {
//     useKeyPress(key => {
//       //1
//       let updatedOutgoingChars = outgoingChars;
//       let updatedIncomingChars = incomingChars;
      
//       //2
//       if (key === currentChar) {
//         //3
//         if (leftPadding.length > 0) {
//           setLeftPadding(leftPadding.substring(1));
//         }
//         //4
//         updatedOutgoingChars += currentChar;
//         setOutgoingChars(updatedOutgoingChars);
        
//         //5      
//         setCurrentChar(incomingChars.charAt(0));
        
//         //6
//         updatedIncomingChars = incomingChars.substring(1);
//         if (updatedIncomingChars.split(' ').length < 10) {
//           updatedIncomingChars +=' ' + generate();
//         }
//         setIncomingChars(updatedIncomingChars);
//       }
//     });
//   }


//   render () {
//     return (
//           <div className="TypingPage">
//             <header className="TypingPage-header">
//               <img src={logo} className="TypingPage-logo" alt="logo" />
//               <p className="Character">
//                 <span className="Character-out">
//                   {(leftPadding + outgoingChars).slice(-20)}
//                 </span>
//                 <span className="Character-current">{currentChar}</span>
//                 <span>{incomingChars.substr(0, 20)}</span>
//               </p>
//               <a
//                 className="TypingPage-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//               </a>
//             </header>
//           </div>
//         );
//   }
// }