import React, { Component } from 'react';
import logo from './logo.svg'; // Webpack
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("App : constructor")
    console.log("App: props=", props)
    this.state = {
      compteur:0
    };
  }
  componentWillMount(){
    console.log("App : componentWillMount")
  }
  componentDidMount(){
    console.log("App : componentDidMount")
  }

  handleClickButton(){
    // Non non ça marche pas ça, this.state uniquement dans le constructeur
    // this.state.compteur++
    this.setState({
      compteur : this.state.compteur + 1
    })
    console.log("click",this);
  }

  render() {
    console.log("App: render")
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={{
            color : this.props.color,
            textDecoration:this.props.textdecoration
          }}>Welcome to React :)</h2>
        </div>
        <p className="App-intro">
          Compteur : <span>{this.state.compteur}</span><br/>
          <button onClick={this.handleClickButton.bind(this)}>+</button>
        </p>
      </div>
    );
  }
}

export default App;
