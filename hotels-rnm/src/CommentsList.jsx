import React, { Component } from 'react';
import Comment from './Comment'
import './App.css';



class Comments extends Component {

  render() {

    return (
      <ul>
        {this.props.comments.map(comment => {
          return <Comment key={comment._id}
            comment={comment}
            />
        })}
      </ul>
    );
  }
}

export default Comments;
