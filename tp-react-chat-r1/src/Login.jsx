import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        };
    }

    handleLogin(e) {
        e.preventDefault()
        this.props.onLogin(this.state.username)
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleLogin.bind(this)}>
                Pseudo : 
                <input type="text"
                    placeholder="Pseudo"
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)} />
                <button>Connexion</button>
            </form>
        )
    }
}

export default Login;