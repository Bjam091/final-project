import React, { useState, useEffect } from 'react';
import '../../App.css';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { addLocationWatcher } from '../../helpers/mapHelpers'
import { connect } from 'react-redux'

// Create Map
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
const Map = ReactMapboxGl({
  accessToken: accessToken
});

const LightMap = function (props) {
  // Map style
  const styleLight = 'mapbox://styles/juliaj621/ck3knnj2n0wy41cpewlosya06'

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
    style={styleLight}
      zoom={props.zoom}
      center={props.location}
      containerStyle={{
        height: '500px',
        width: '100%'
      }}
    >
      {/* <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={props.location} />
      </Layer> */}
      <Marker
        coordinates={props.location}
        className='marker'
      >
      </Marker>
    </Map>
  )
};

const connecter = connect(state => state)(LightMap);
export default connecter 