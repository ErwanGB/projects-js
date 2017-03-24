import React, { Component } from 'react';
import './App.css';

class Message extends Component {
  render() {
    return (
      <li>
        <span className="msgTimeStamp">
          [{this.props.date}]
        </span>
        {this.props.user.username} : {this.props.message}
      </li>
    );
  }
}

Message.propTypes = {
    message: React.PropTypes.string.isRequired
}

export default Message;