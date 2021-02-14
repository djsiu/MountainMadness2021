import React from 'react';
import './Popup.css';
import useKeyPress from './hooks/useKeyPress';

var keyWords = [
    "cluck",
    "bok",
    "egg",
    "chicken",
    "hen"
];

function Popup(props) {
    useKeyPress(key => {

    });

    var index;
    index = Math.floor(Math.random()*keyWords.length);
    console.log(index);

    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{keyWords[index]}</h1>
          <button onClick={props.closePopup}>close me</button>
        </div>
      </div>
    );
}

export default Popup;