import axios from 'axios';
import api from '../../utils/api';

export const LIKE_COUNT_PAYLOAD_RECEIVED = 'LIKE_COUNT_PAYLOAD_RECEIVED';

const INITIAL_STATE = {
  likes: {},
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LIKE_COUNT_PAYLOAD_RECEIVED:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};

export function getLikes(track_id) {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
      dispatch({ type: LIKE_COUNT_PAYLOAD_RECEIVED, payload: data });
    } catch (e) {
      console.log('error getting like count for track', e);
    }
  }
};

export function likeTrack(track_id, jwt) {
  return async (dispatch) => {
    try {
      const data = await axios.post(`${api.url}/tracks/like/${track_id}`, { headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + jwt}});
      if (data.length > 0) {
        const likes = await axios.get(`${api.url}/tracks/liked_count/${track_id}`);
        dispatch({ type: LIKE_COUNT_PAYLOAD_RECEIVED, payload: likes });
      }
    } catch (e) {
      console.log('error liking track', e);
    }
  }
};
