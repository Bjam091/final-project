import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import api from '../../utils/api';
// import { likeTrack, getLikes } from './redux';

export class TrackLike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.getLikes(this.props.track_id);
  }

  async getLikes(track_id) {
    console.log('track id in liked', track_id)
    try {
      const data = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
      console.log('data in likes', data);
      this.setState({ count: data.data });
    } catch (e) {
      console.log('error getting like count for track', e);
    }
  };

  async likeTrack(track_id) {
    console.log('auth token', this.props.auth.jwt.jwt);
    try {
      const data = await axios.post(`${api.url}/tracks/like/${track_id}`, { Headers: { 'Authorization': "Bearer " + this.props.auth.jwt.jwt}});
      if (data.length > 0) {
        const likes = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
        this.setState({ count: likes.data });
      }
    } catch (e) {
      console.log('error liking track', e);
    }
  };

  render() {
    const { track_id } = this.props;
    return (
      <div>
        <div className='liked-track'>
          <button type="button" className='like-button' onClick={() => this.likeTrack(track_id)}>
            {/* <img src="https://i.ibb.co/28TYZtK/heart-filled.png" alt="heart-fill"/> */}
            <img src="https://i.ibb.co/Ny59PtM/heart-outline.png" alt="heart-outline" />
          </button>
        {this.state.count} users like this
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  //find by props track id
  return {
    auth: state.auth,
    //likes: state.likes,
  };
};

export default connect(mapState, {})(TrackLike);
