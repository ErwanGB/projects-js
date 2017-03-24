import React, { Component } from 'react';
import './App.css';


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auteur: "",
      contenu: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault() 
    this.props.addComment(this.state.auteur,this.state.contenu)
  }

  render() {

    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        Author <input type="text" name="auteur" onChange={this.handleInputChange} /><br />
        Comment <input type="textarea" name="contenu" onChange={this.handleInputChange} />
        <button>Envoyer</button>
      </form>
    );
  }
}

export default CommentForm;
