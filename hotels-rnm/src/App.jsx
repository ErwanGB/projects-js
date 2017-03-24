import React, { Component } from 'react';
import Hotels from './Hotels'
import Hotel from './Hotel'
import $ from 'jquery'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotels: [],
      hotel: {},
    };
  }

  componentWillMount() {
    $.getJSON('http://localhost:8888/hotels', (data) => {
      this.setState({
        hotels: data
      })
    })
  }

  handleGetHotel(hotel) {
    this.setState({
      hotel
    })
  }

  handleGetHotels() {
    this.setState({
      hotel : {}
    })
  }


  render() {
    if (!this.state.hotel.recordid) {
      return (
        <div className="App">
          <Hotels hotels={this.state.hotels} getHotel={this.handleGetHotel.bind(this)} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Hotel hotel={this.state.hotel} getHotels={this.handleGetHotels.bind(this)} />
        </div>
      )
    }
  }
}

export default App;
