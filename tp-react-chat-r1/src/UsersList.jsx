import React, { Component } from 'react';
import './App.css';

class UsersList extends Component {
  render() {
    return (
      <div className="UsersList">
        <ul>
          {this.props.listUsers.map(listValue => {
            return <li key={listValue.id}>{listValue.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}


export default UsersList;