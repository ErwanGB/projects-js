import React, { Component } from 'react';
import './App.css';
import Message from './Message';

class MessagesList extends Component {
  render() {
    return (
    <div className="MessagesList">
      <ul>
        {this.props.listMsg.map(listValue =>{
            return <Message key={listValue} message={listValue} />;
          })}
      </ul>
    </div>
    );
  }
}

MessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessagesList;

/*
const obj = {
    foo : "FOO";
    bar : "BAR"
}
const{foo,bar} = obj;




*/