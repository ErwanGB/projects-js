import React, { Component } from 'react'
import './App.css'
import FontAwesome from 'react-fontawesome'

class HotelSample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recordid: this.props.hotelobj.recordid
        };
    }
    
    handleGetHotel(e) {
        e.preventDefault()
        this.props.getHotel(this.props.hotelobj)
    }

    render() {
        const {nom_commercial, commune, note} = this.props.hotelobj.fields
        let stars = []
        for (var i = 0; i < note; i++) {
            stars.push(<FontAwesome key={i} className="icon-star" name="star" />);
        }

        return (
            <tr>
                <td><a onClick={ this.handleGetHotel.bind(this) }>{nom_commercial}</a></td>
                <td>{commune}</td>
                <td>{stars}</td>
            </tr>
        );
    }
}

export default HotelSample;