import React, { Component } from 'react';
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
import $ from 'jquery'
import './App.css';



class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      hotelid : this.props.hotelid
    };
  }

  componentWillMount() {
    this.getAllComments()
  }

  getAllComments() {
    $.getJSON('http://localhost:8888/hotel/' + this.state.hotelid + '/comments', (comments) => {
      this.setState({
        comments
      })
    })
  }

  handleAddComment(auteur,contenu) {
    $.ajax({
      url: 'http://localhost:8888/hotel/' + this.state.hotelid + '/comment',
      type: 'POST',
      data: {
        auteur : auteur,
        contenu : contenu
      },
      complete: this.getAllComments()
    });
  }

  render() {

    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <CommentForm addComment={this.handleAddComment.bind(this)} />
      </div>
    );
  }
}

export default Comments;
