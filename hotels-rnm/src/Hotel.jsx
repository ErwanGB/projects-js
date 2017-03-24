import React, { Component } from 'react';
import './App.css';
import Comments from './Comments'

class Hotel extends Component {
  handleGetHotels(e) {
    e.preventDefault()
    this.props.getHotels()
  }

  render() {
    const {nom_commercial, commune, classement,
      adresse, code_postal, telephone,
      site_internet, nombre_de_chambres, capacite_d_accueil_personnes} = this.props.hotel.fields
    return (
      <div>
        <article>
          <h1>{nom_commercial} {classement}</h1>
          <div>{adresse}<br />{code_postal} {commune}</div>
          <div>{telephone}</div>
          <div>{site_internet}</div>
          <div>Nombre de chambres : {capacite_d_accueil_personnes}<br />
            Capacité :  {nombre_de_chambres}</div>
          <a onClick={this.handleGetHotels.bind(this)}>Retour à la liste des hôtels</a>
        </article>
        <Comments hotelid={this.props.hotel.recordid} />
      </div>
    );
  }
}

export default Hotel;
