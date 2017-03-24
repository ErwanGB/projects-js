import React, { Component } from 'react';
import './App.css';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';
import Login from './Login';
import UsersList from './UsersList';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      allusers: [],
      user: {
        id: "",
        username: "",
      },
    };
  }

  componentWillMount() {
    this.socket = io('http://localhost:4000');

    this.socket.on('connect', () => {
      console.log('Client connecté')
    })

    this.socket.on('useradded', (user) => {
      this.handleSend('*****has entered the chat*****')
      this.setState({
        user: {
          id: user.id,
          username: user.username
        }
      })
    })

    this.socket.on('leave', (user) => {
      this.handleSend('*****has left the chat******')
    });

    this.socket.on('listusers', (allusers) => {
      console.log(allusers)
      this.setState({
        allusers
      })
    })

    this.socket.on('broadcast', (msgObj) => {
      this.setState(
        {
          messages: [...this.state.messages, msgObj],
        })
    })
  }

  componentWillUnmount() {
    this.socket.close();
  }

  handleSend(msgtxt) {
    this.socket.emit('msg', msgtxt)
  }

  handleLogin(username) {
    this.socket.emit('adduser', username)
  }

  render() {
    if (this.state.user.id) {
      return (
        <div className="App">
          <MessagesList listMsg={this.state.messages} />
          <UsersList listUsers={this.state.allusers} />
          <MessageForm onSend={
            this.handleSend.bind(this)
          } />
        </div>
      );
    } else {
      return (
        <div className="Login">
          <Login onLogin={this.handleLogin.bind(this)} />
        </div>
      );
    }
  }
}

export default App;
