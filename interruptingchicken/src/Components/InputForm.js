import Form from 'react-bootstrap/Form'
import React from 'react'

class InputForm extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            name : ''
        };
    }

    handleChange(e) {
        e.preventDefault();
        const {value} = e.target;

        this.setState({name: value});
    }

    handleSubmit = (e) => {
        console.log(this.props.text)
        console.log(this.state.name)
        e.preventDefault();
        if (this.props.text === this.state.name) {
            this.props.closePopup();
        } else {
            this.setState({name : ''});
            console.log('not closing popup');
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                </Form>
            </div>
        );
    }
    
}

export default InputForm;