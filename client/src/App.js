import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Mapbox base map URL
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
const tileUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
// Map settings
const maxZoom = 19

// removes the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
// attaches and styles a new marker icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const customIcon = new L.Icon({
  iconUrl: require('./assets/marker.png'),
  iconSize: [25, 25]
})

// Get user's location
window.lat = 49.2812;
window.lng = -123.12345;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updatePosition);
    }
  
    return null;
};

function updatePosition(position) {
  if (position) {
    window.lat = position.coords.latitude;
    window.lng = position.coords.longitude;
    console.log("shoop da woop", window.lat, window.lng);
    document.querySelector('.horseapples').innerHTML = `hmn ${window.lat}, ${window.lng}`;
    // console.log(window.lng)
  }
}

getLocation();
  
const currentLat = () => {
  return window.lat;
};
const currentLong = () => {
  return window.lng;
};
// const getLocation = () => {
  // if ('geolocation' in navigator) {
  //   navigator.geolocation.watchPosition(
  //     position => {
  //        console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`)},
  //     err => alert(`Error (${err.code}): ${err.message}`)
  //   );
  // } else {
  //   alert('Geolocation is not supported by your browser.');
  // }
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      zoom: 12,
      mapCenter: [49.2812, -123.1149],
      lat: currentLat(),
      long: currentLong()
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

  setLat = () => {
   currentLat()
  }

  setLong = () => {
    currentLong()
  }

  render() {
    return (
        // <div className="App">
        //   <h1>{ this.state.message }</h1>
        //   <button onClick={this.fetchData} >
        //     Fetch Data
        //   </button>        
        // </div>
      <>
        <div className='horseapples'>nope</div>
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
        <MarkerClusterGroup>
          <Marker
            lat={this.setLat()}
            long={this.setLong()}
            position={[this.state.lat, this.state.long]}
            icon={customIcon}
            style={{fontColor: '#edc4bc'}}
          >
          </Marker>
        </MarkerClusterGroup>
        </Map>
      </ >
    );
  }
}

export default App;
