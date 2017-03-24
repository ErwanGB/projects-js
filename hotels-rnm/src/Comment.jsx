import React, { Component } from 'react';
import './App.css';



class Comment extends Component {

  render() {

    return (
      <li>
          <div style={{fontSize:'0.8em',backgroung:'#ccc',padding:'2px'}}>{this.props.comment.auteur}</div>
          {this.props.comment.contenu}
      </li>
    );
  }
}

export default Comment;
