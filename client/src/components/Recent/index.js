import React, { PureComponent } from 'react';
import axios from 'axios';
import api from '../../utils/api';
import './recent.scss';
import { connect } from 'react-redux';

export class Recent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tracks: {},
    }
  }

  componentDidMount() {
    this.fetchRecentTracks();
  }

  fetchRecentTracks() {
    axios.get(`${api.url}/tracks/liked_tracks`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + `${this.props.auth.jwt.jwt}`}})
    .then((response) => {
      this.setState({ tracks: response.data });
    });
  }

  renderRecentTracks() {
    const { tracks } = this.state;
    if (tracks.length > 0) {
      return tracks.map((track) =>
        <div>
          <div className='trackitem'>
            <div className='flex'>
              <iframe className='current-track-image' src={`https://open.spotify.com/embed/track/${track.spotify_uuid}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <div className='track-text'>
                <div>{track.title}</div>
                <div>{track.artist}</div>
              </div>
            </div>

            <div className='track-buttons'>
              <a href={track.spotify_url}> <img className="spotify-badge" src="https://taylorbennett.co/wp-content/uploads/2018/02/spotify-badge-button.png" /></a>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <div className="recently-played">
        <h4>Recently Played Songs</h4>
          {this.renderRecentTracks()}
        </div>
      </div>
    );
  }
}


const mapState = (state) => {
  return {
    auth: state.auth,
    // recent: state.recent
    //locations: state.locations build this
  };
};

export default connect(mapState, {})(Recent);
