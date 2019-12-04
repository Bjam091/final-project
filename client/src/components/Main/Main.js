import React, { PureComponent } from 'react';
import axios from 'axios';
import api from '../../utils/api';
import './main.scss';

export default class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tracks: {},
    }
  }

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks() {
    axios.get(`${api.url}/tracks`).then((response) => {
      this.setState({ tracks: response.data.reverse() });
    });
  }

  renderTracks() {
    const { tracks } = this.state;
    if (tracks.length > 0) {
      return tracks.map((track) =>
        <div className="track-col">
          <img className="album-art" src={track.album_art_url} alt="" />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="artist-grid">
          {this.renderTracks()}
        </div>
        <div class="splash-header" align="center">
          <div class="head1">ListenIn </div>
          <div class="head2">See what people around you are listening to.</div>
        </div>
        <div className="spotify-wrapper">
          <img
          onClick={() => window.location.href = `${api.url}/authorize` }
          className="spotify-button"
          src="/assets/spotify_connect.png"
          alt=""
          />
        </div>
      </div>
    );
  }
}
