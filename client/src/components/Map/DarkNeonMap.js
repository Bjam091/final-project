import React, { useState, useEffect } from 'react';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { addLocationWatcher } from '../../helpers/mapHelpers'

// Create Map
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
const Map = ReactMapboxGl({
  accessToken: accessToken
});

export default function DarkNeonMap(props) {
  // Map style
  const styleDarkNeon = 'mapbox://styles/juliaj621/ck3eu8hj10b8h1cpdte6laqul'

  // State to set zoom and location movement of user
  const [zoom, setZoom] = useState([14])
  const [location, setLocation] = useState([-123.1249, 49.2812])

  // Function to change location state 
  function processNewPosition(pos) {
    if (pos && pos.coords) {
      setLocation([pos.coords.longitude, pos.coords.latitude]);
    } else {
      console.log("wtf is wrong with the position?", pos);
    }
  }

  // When location changes this function triggers the new position to process into state
  useEffect(() => { addLocationWatcher(processNewPosition) }, []);

  // Rendering of map, marker, and styles menu
  return (
    <Map
      style={styleDarkNeon}
      zoom={zoom}
      center={location}
      containerStyle={{
        height: '500px',
        width: '100%'
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={location} />
      </Layer>
    </Map>
  )
};