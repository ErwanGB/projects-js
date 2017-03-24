import React, { Component } from 'react';
import './App.css';
import HotelSample from './HotelSample'

class Hotels extends Component {

  handleGetHotel(e) {
    this.props.getHotel(e)
  }

  render() {
    return (
      <div>
        <h1>Liste des Hôtels</h1>
        <table>
          <tbody>
            {this.props.hotels.map(hotels => {
              return <HotelSample key={hotels.recordid}
                hotelobj={hotels}
                getHotel={this.handleGetHotel.bind(this)}
                />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Hotels;
