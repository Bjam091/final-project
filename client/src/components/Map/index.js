import React, { Component, setState } from 'react';
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
    this.state = {
      broadcast: "Stop Broadcasting"
    };
    this.startBroadcasting = this.startBroadcasting.bind(this)
    
  }

  // When location changes this function triggers the new position to process into state
  componentDidMount() {
    addLocationWatcher(this.props.processNewPosition)
  }

  startBroadcasting () {
    if (this.state.broadcast === 'Stop Broadcasting') {
    this.setState({broadcast: 'Start Broadcasting'})
    } else {
      this.setState({broadcast: 'Stop Broadcasting'})
    }
  }
  
  render() {
    const { location } = this.props.loc;
    return (
      <React.Fragment>
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
        {/* <button className='start-broadcast'>Start Broadcasting</button> */}
      <button className='start-broadcast' onClick={this.startBroadcasting}>{this.state.broadcast}</button>
      </section>
        <div className='navbar'>
          <button className='navbuttons'> <img src='https://i.ibb.co/M5Fx5SJ/home-inactive.png'/></button>
          <button className='navbuttons'><img src='https://i.ibb.co/XtYQ1mV/user-inactive.png'/></button>
        </div>
        </React.Fragment>
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
