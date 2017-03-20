import React, { Component } from 'react';
import './App.css';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages : [],
    };
  }  

  handleSend(msg){   
    this.setState(
      {
      messages : [...this.state.messages,msg],
    })
  }

  render() {
    return (
      <div className="App">
        <MessagesList listMsg={this.state.messages} />
        <MessageForm onSend={
          this.handleSend.bind(this)           
        }/>
      </div>
    );
  }
}

export default App;
