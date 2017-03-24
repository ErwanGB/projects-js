import React, { Component } from 'react';
import './App.css';


class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault()    
        this.props.onSend(this.state.message);
        // Vider l'input
        this.setState({
            message : ""
        })
    }


    handleChange(e){
        this.setState({
            message: e.target.value
        })
    }
    render() {
        return (
            <div className="MessageForm">
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" 
                           placeholder="Message" // Two-Way Data Binding 
                           value={ this.state.message } 
                           onChange={ this.handleChange.bind(this) } />
                    <button>Envoyer</button>
                </form>
            </div>
        );
    }
}

MessageForm.propTypes = {
    onSend : React.PropTypes.any.isRequired
}


export default MessageForm;