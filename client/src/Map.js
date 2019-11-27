import React, { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { addLocationWatcher } from './mapHelpers'

const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
const Map = ReactMapboxGl({
  accessToken: accessToken
});

export default function Mapper(props) {
  // Mapbox base map URL
  // Map settings
  const style = 'mapbox://styles/juliaj621/ck3hpn3x80yk41cqdd83vszuz'

  const [zoom, setZoom] = useState([14])
  const [location, setLocation] = useState([-123.1249, 49.2812])

  // setLocation(addLocationWatcher())
  function processNewPosition(pos) {
    if (pos && pos.coords) {
      setLocation([pos.coords.longitude, pos.coords.latitude]);
    } else {
      console.log("wtf is wrong with the position?", pos);
    }
  }

  useEffect(() => { addLocationWatcher(processNewPosition) }, []);

  return (
      <Map
        style={style}
        zoom={zoom}
        center={location}
        containerStyle={{
          height: '100vh',
          width: '100vw'
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