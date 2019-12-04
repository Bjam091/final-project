import React, { PureComponent } from 'react';
import axios from 'axios';
import api from '../../utils/api';
import './like.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../App.css'

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
      <div className='trackitemb'>

          <iframe className='current-track-imageb' src={`https://open.spotify.com/embed/track/${track.spotify_uuid}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

          {/* <div className="flexb">  */}
          <div className='track-textb'>
            <div><strong>{track.title}</strong></div>
            <div>{track.artist}</div><br></br>
          {/* </div> */}
          <div class="spotify-line">
          <div></div>
          <div>
              <a href={track.spotify_url}> <img className="spotify-badgeb" src="https://taylorbennett.co/wp-content/uploads/2018/02/spotify-badge-button.png"/></a>
            </div>
            </div>
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
        <div className="recently-playedb">
          <div className="pocket-header">
        My Track Pocket
        </div>
          {this.renderLikeTracks()}
        </div>
        <div className='navbar'>
          <Link className='navbuttons' to='/map'><img src='https://i.ibb.co/M5Fx5SJ/home-inactive.png' /></Link>
          <Link className='navbuttons' to='/track-pocket'><img src='https://i.ibb.co/XtYQ1mV/user-inactive.png' /></Link>
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
