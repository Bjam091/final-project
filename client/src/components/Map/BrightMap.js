import React, { useState, useEffect } from 'react';
import '../../App.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { addLocationWatcher } from '../../helpers/mapHelpers'
import { connect } from 'react-redux'

// Create Map
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
const Map = ReactMapboxGl({
  accessToken: accessToken
});

const BrightMap = function (props) {
  // Map styles
  const styleBright = 'mapbox://styles/juliaj621/ck3hpn3x80yk41cqdd83vszuz'
  const styleDarkYellow = 'mapbox://styles/juliaj621/ck3hqdgkb06il1cozji9lryp3'
  const styleDarkNeon = 'mapbox://styles/juliaj621/ck3eu8hj10b8h1cpdte6laqul'

  // State to set zoom and location movement of user
  const [zoom, setZoom] = useState([14])
  // const [location, setLocation] = useState([-123.1249, 49.2812])

  // Function to change location state 
  function processNewPosition(pos) {
    if (pos && pos.coords) {
      props.dispatch (
        { 
          type: 'UPDATE_LOCATION', 
          location: [pos.coords.longitude, pos.coords.latitude]
        }
      );
    } else {
      console.log("wtf is wrong with the position?", pos);
    };
  };

  // When location changes this function triggers the new position to process into state

  useEffect(() => { addLocationWatcher(processNewPosition) }, []);

  // Rendering of map, marker, and styles menu
  return (
    <Map
    style={styleBright}
      zoom={zoom}
      center={props.location}
      containerStyle={{
        height: '500px',
        width: '100%'
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={props.location} />
      </Layer>
    </Map>
  )
};

const connecter = connect(state => state)(BrightMap);
export default connecter 