import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { addLocationWatcher } from '../../helpers/mapHelpers'
import { processNewPosition } from './redux';
import TrackListItem from '../TrackList/TrackListItem'

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

  render() {
    const { location } = this.props.loc;
    return (
      <section className='container'>
        <Map
          className='map'
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
        <TrackListItem className='current-song'></TrackListItem>
        <div id='broadcast-dot'>
          <img className='green-dot' src='https://i.ibb.co/ZT4PDZJ/glow-button-on.png' />
          <div className='broadcasting'>Broadcasting Now</div>
        </div>
        <div className='nearby-users'>
          {(this.props.tracks.tracks.length - 1)}
        </div>
      </section>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
    loc: state.loc,
    tracks: state.tracks
  };
};

export default connect(mapState, { processNewPosition })(LightMap);
