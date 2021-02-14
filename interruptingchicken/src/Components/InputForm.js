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
        const {value} = e.target;

        this.setState({name: value});
    }

    handleSubmit = () => {
        console.log('closing popup');
        if (this.props == this.state.value) {
            this.props.closePopup();
        } else {
            this.setState({name : ''});
            console.log('not closing popup');
        }
    }

    render() {
        return (
            <Form>
                <input type="form-input" onChange={this.handleChange.bind(this)}/>
                <input type="submit" value="Submit" onSubmit={this.handleSubmit.bind(this)}/>
            </Form>
        );
    }
    
}

export default InputForm;