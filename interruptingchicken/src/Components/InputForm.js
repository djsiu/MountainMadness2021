import Form from 'react-bootstrap/Form'
import React from 'react'

class InputForm extends React.Component { 
    constructor(props) {
        super(props);
        this.setInputFocus = this.setInputFocus.bind(this);
        this.state = {
            name : ''
        };
    }

    setInputFocus() {
        this.myInputRef.focus();
    }

    handleChange(e) {
        e.preventDefault();
        const {value} = e.target;

        this.setState({name: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.text === this.state.name) {
            this.props.closePopup();
        } else {
            this.setState({name : ''});
            e.target.reset();
            console.log('not closing popup');
            console.log(this.state.name);
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.handleChange.bind(this)} />
                </Form>
            </div>
        );
    }
    
}

export default InputForm;