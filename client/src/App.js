import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Mapbox base map URL
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxeTM3YTAxNGMzY253YjQwZzI4dzgifQ.kPd5-63cgQtFaBXWjc4IWQ'
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      zoom: 12,
      mapCenter: [49.2812, -123.1149],
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

  // componentDidMount = () => {
  //   fetch(`http://localhost:5000/trees`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({trees: data.features})
  //     })
  // }

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
      <MarkerClusterGroup
            >
          {/* {this.state.trees.map(tree => {
            return (
                <Marker
                  key={`marker_${tree.properties.id}`}
                  position={[tree.geometry.coordinates[1], tree.geometry.coordinates[0]]}
                  icon={customIcon}
                  style={{fontColor: '#edc4bc'}}
                >
                <Popup key={`pop_${tree.properties.id}`}>
                  {tree.properties.common_name ? (<div>{`Common name: ${tree.properties.common_name}`}</div>) : null}
                  {tree.properties.scientific_name ? (<div>{`Scientific name: ${tree.properties.scientific_name}`}</div>) : null}
                  {tree.properties.fam_name ? (<div>{`Family: ${tree.properties.fam_name}`}</div>) : null}
                  {tree.properties.genus_name ? (<div>{`Genus: ${tree.properties.genus_name}`}</div>) : null}
                  {tree.properties.condition ? (<div>{`Condition: ${tree.properties.condition}`}</div>) : null}
                  Address: {tree.properties.address}
                </Popup>
              </Marker>
            )
          })} */}
      </MarkerClusterGroup>
      </Map>
    );
  }
}

export default App;
