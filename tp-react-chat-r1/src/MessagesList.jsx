import React, { Component } from 'react';
import './App.css';
import Message from './Message';

class MessagesList extends Component {
  render() {
    return (
    <div className="MessagesList">
      <ul>
        {this.props.listMsg.map(listValue =>{
            return <Message key={listValue.id} message={listValue.message} user={listValue.user} date={listValue.date} />;
          })}
      </ul>
    </div>
    );
  }
}

/*MessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired
}*/

export default MessagesList;