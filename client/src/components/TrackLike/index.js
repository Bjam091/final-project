import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import api from '../../utils/api';

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
    try {
      const data = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
      console.log('data in likes', data);
      this.setState({ count: data.data });
    } catch (e) {
      console.log('error getting like count for track', e);
    }
  };

  async likeTrack(track_id) {
    try {
      await axios.post(`${api.url}/tracks/like/${track_id}?user_id=${this.props.auth.user.id}`);
      const likes = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
      this.setState({ count: likes.data });

    } catch (e) {
      console.log('error liking track', e);
    }
  };

  async unlikeTrack(track_id) {
    try {
      await axios.post(`${api.url}/tracks/unlike/${track_id}?user_id=${this.props.auth.user.id}`);
      const likes = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
      this.setState({ count: likes.data });

    } catch (e) {
      console.log('error unliking track', e);
    }
  };

  render() {
    const { track_id } = this.props;
    if (this.state.count > 0) {
      return (
        <div className='liked-track'>
          <button type="button" className='like-button' onClick={() => this.unlikeTrack(track_id)}>
            <img src="https://i.ibb.co/28TYZtK/heart-filled.png" alt="heart-fill"/>
          </button>
        {this.state.count} users like this
        </div>
      )
    }
    return (
      <div>
        <div className='liked-track'>
          <button type="button" className='like-button' onClick={() => this.likeTrack(track_id)}>
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
  };
};

export default connect(mapState, {})(TrackLike);
