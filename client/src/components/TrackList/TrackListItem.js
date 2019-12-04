import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./TrackListItem.scss";
import Slider from 'react-slick';
import TrackLike from '../TrackLike';
import { fetchCurrentSong, fetchAllNearby } from './redux';
import axios from 'axios'
import api from '../../utils/api';

export class TrackListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Used to get nearby songs with user's location
  componentDidMount() {
    this.props.fetchAllNearby(this.props.auth.user.latitude, this.props.auth.user.longitude)
    this.props.fetchCurrentSong(this.props.auth.jwt.jwt)
    this.timer = setInterval(() => { this.props.fetchAllNearby(this.props.auth.user.latitude, this.props.auth.user.longitude) }, 2000);
    this.current = setInterval(() => { this.props.fetchCurrentSong(this.props.auth.jwt.jwt) }, 2000);
  }

  componentWillUnmount() {
    this.timer = null;
    this.current = null;
  }

  async likeTrack(track_id) {
    try {
      await axios.post(`${api.url}/tracks/like/${track_id}?user_id=${this.props.auth.user.id}`);

    } catch (e) {
      console.log('error liking track', e);
    }
  };


  render() {
    const nearbyList = this.props.tracks.tracks.filter(nearby => nearby.track_id !== null)
    nearbyList.sort((a, b) => a.id - b.id);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 10000,
      swipeToSlide: true,
      centerMode: true,
    };
    return (
      <React.Fragment>
        <div className='nearby-broadcasting'>
          <div style={{ color: '#8f27db' }}>Playing Nearby</div>
        </div>
        <Slider {...settings}>
          {nearbyList.map((track) =>
            <div key={track.track_id}>
              <div className='trackitem'>
                <div className='flex'>
                  <iframe className='current-track-image' src={`https://open.spotify.com/embed/track/${track.track.spotify_uuid}`} width="80" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  <div className='track-text'>
                  <marquee classname='marquee'scrolldelay='200'>
                    <div>{track.track.title}</div>
                    </marquee>
                    <div>{track.track.artist}</div>
                    <div className='liked-track'>
                      <button type="button" className='like-button' onClick={() => this.likeTrack(track.track.id)}>
                        <img src="https://i.ibb.co/28TYZtK/heart-filled.png" alt="heart-fill" />
                      </button>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className='track-buttons'>
                  <button className='user-preview'><img className='signal-icon' src="https://i.ibb.co/CJStwTB/signal.png" alt="" />{track.spotify_username}</button>
                  <a href={track.track.spotify_url}> <img className="spotify-badge" src="https://taylorbennett.co/wp-content/uploads/2018/02/spotify-badge-button.png" alt="" /></a>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </React.Fragment>
    );
  }
};

const mapState = (state) => {
  return {
    auth: state.auth,
    loc: state.loc,
    current_track: state.current_track,
    tracks: state.tracks
  };
};

export default connect(mapState, { fetchCurrentSong, fetchAllNearby })(TrackListItem);
