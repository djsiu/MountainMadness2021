import React from 'react';
import './Popup.css';
import InputForm from './Components/InputForm'

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <InputForm text={this.props.text} closePopup={this.props.closePopup}></InputForm>
          {/* <button onClick={this.props.closePopup}>close me</button> */}
        </div>
      </div>
    );
  }
}

export default Popup;