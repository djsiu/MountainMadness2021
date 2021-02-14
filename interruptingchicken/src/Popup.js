import React from 'react';
import './Popup.css';
import InputForm from './Components/InputForm'

class Popup extends React.Component {

  keyWords = [
    "cluck",
    "bok",
    "egg",
    "chicken",
    "hen"
  ];

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <InputForm text={keyWords[Math.floor(Math.random()*keyWords.length)]} closePopup={this.props.closePopup}></InputForm>
          {/* <button onClick={this.props.closePopup}>close me</button> */}
        </div>
      </div>
    );
  }
}

export default Popup;