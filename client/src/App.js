import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

// Mapbox base map URL
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxeTM3YTAxNGMzY253YjQwZzI4dzgifQ.kPd5-63cgQtFaBXWjc4IWQ'
const tileUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
// Map settings
const maxZoom = 19

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      zoom: 12,
      mapCenter: [49.2827, -123.1207],
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      // <div className="App">
      //   <h1>{ this.state.message }</h1>
      //   <button onClick={this.fetchData} >
      //     Fetch Data
      //   </button>        
      // </div>
      <Map
      ref={m => { this.leafletMap = m }}
      id="mapid"
      center={this.state.mapCenter}
      zoom={this.state.zoom}
      maxZoom={maxZoom}
      >
      <TileLayer
        attribution={attribution}
        url={tileUrl}
        id={'mapbox.light'}
        accessToken={accessToken}
      />
      </Map>
    );
  }
}

export default App;
