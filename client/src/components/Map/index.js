import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { addLocationWatcher } from '../../helpers/mapHelpers'
import { processNewPosition } from './redux';

// Create Map
const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
const Map = ReactMapboxGl({
  accessToken: accessToken
});

const styleLight = 'mapbox://styles/juliaj621/ck3knnj2n0wy41cpewlosya06'

export class LightMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // When location changes this function triggers the new position to process into state
  componentDidMount() {
    addLocationWatcher(this.props.processNewPosition)
  }
  // useEffect(() => { addLocationWatcher(processNewPosition) }, []);

  render() {
    const { location } = this.props.loc;
    console.log(this.props)
    return (
      <Map
        style={styleLight}
        zoom={this.props.loc.zoom}
        center={location}
        containerStyle={{
          height: '500px',
          width: '100%'
        }}
      >
        <Layer
          type="symbol"
          className="marker"
          layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={location} />
        </Layer>
      </Map>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    loc: state.loc
  };
};

export default connect(mapState, { processNewPosition })(LightMap);
