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
    axios.get(`${api.url}/tracks/liked_tracks?user_id=1`)
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
      
        <div className='flexb'>
           {/* <div> */}
          <iframe className='current-track-imageb' src={`https://open.spotify.com/embed/track/${track.spotify_uuid}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <div className='track-textb'>
            <div><strong>{track.title}</strong></div>
            <div>{track.artist}</div>
            <div class="likesb"><button type="button" className='like-buttonb' >
              {/* onClick={fetchCurrentSong}> */}
              {/* <form id="form-id" method="post" action="https://listen-in.herokuapp.com/tracks/like/${track.id}"> */}
          <img src="https://i.ibb.co/28TYZtK/heart-filled.png" class="like-buttonb" alt="heart-fill" onclick="document.getElementById('form-id').submit();"/>
        {/* </form> */}
              {/* <img src="https://i.ibb.co/Ny59PtM/heart-outline.png" alt="heart-outline" /> */}
            </button># users like this</div> 
            </div>
          </div>
          <div class="spotify-buttonb"> <a href={track.spotify_url}> <img className="spotify-badgeb" src="https://taylorbennett.co/wp-content/uploads/2018/02/spotify-badge-button.png"/></a> </div>
        {/* </div> */}
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
        <h1>My Track Pocket</h1> 
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
