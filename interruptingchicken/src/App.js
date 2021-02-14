import logo from './logo.svg';
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


// class App extends React.Component {
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
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p className="Character">
//                 <span className="Character-out">
//                   {(leftPadding + outgoingChars).slice(-20)}
//                 </span>
//                 <span className="Character-current">{currentChar}</span>
//                 <span>{incomingChars.substr(0, 20)}</span>
//               </p>
//               <a
//                 className="App-link"
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