import React from 'react';
import './Popup.css';
import InputForm from './Components/InputForm';
import chick1 from './chickens/black-chick.png';
import chick2 from './chickens/white-chick.png';
import chick3 from './chickens/broiler-chick.png';

var chicks = [
  chick1,
  chick2,
  chick3
]

class Popup extends React.Component {


  render() {
    return (
      <div className='popup'>
        <h1 className='keyWord'>{this.props.text}</h1>
        <InputForm text={this.props.text} closePopup={this.props.closePopup}></InputForm>
        <img src={chicks[0]} className="chick-pic" alt="logo" />
      </div>
    );
  }
}

export default Popup;