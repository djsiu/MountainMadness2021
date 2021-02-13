import React from 'react';
import Popup from './Popup';

class PopBtn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showPopup: false };
    }
  
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  
    render() {
      return (
        <div className="App">
        <div>
          <h1> Simple Popup Example in React </h1>
          <button onClick={this.togglePopup.bind(this)}> Click to launch popup </button>
  
          {this.state.showPopup ?
            <Popup 
            text='Click "Close Button" to hide popup'
            closePopup = {this.togglePopup.bind(this)}
          />
          : null
          }
        </div>
      </div>
      );
    }
  }

export default PopBtn;