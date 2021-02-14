import React from 'react';
import './Popup.css';
import useKeyPress from './hooks/useKeyPress';
import chick from './chickens/black-chick.png';

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
  //console.log(index);

  return (
    <div className='popup'>
      <h1 className='keyWord'>{keyWords[index]}</h1>
      <button onClick={props.closePopup}>close me</button>
      <img src={chick} className="chick-pic" alt="logo" />
    </div>
  );
}

export default Popup;