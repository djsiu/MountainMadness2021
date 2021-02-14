import React from 'react';
import './Popup.css';
import InputForm from './Components/InputForm';

class Popup extends React.Component {


  render() {
    return (
      <div className='popup'>
        <h1 className='keyWord'>{this.props.text}</h1>
        <InputForm text={this.props.text} closePopup={this.props.closePopup}></InputForm>
        <img src={this.props.chick} className="chick-pic" alt="logo" />
      </div>
    );
  }
}

export default Popup;