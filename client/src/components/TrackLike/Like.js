import React, { PureComponent } from 'react';
import axios from 'axios';
import api from '../../utils/api';
import './like.scss';
import { connect } from 'react-redux';

export class Like extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tracks: {},
    }
  }

  componentDidMount() {
    this.fetchLikeTracks();
  }

  fetchLikeTracks() {
    axios.get(`${api.url}/tracks/liked_tracks?user_id=${this.props.auth.user.id}`)
    .then((response) => {
      this.setState({ tracks: response.data });
    });
  }

  renderLikeTracks() {
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
          {this.renderLikeTracks()}
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

export default connect(mapState, {})(Like);
