import axios from 'axios';
import api from '../../utils/api';

export const UPDATE_CURRENT_SONG = 'UPDATE_CURRENT_SONG';
export const UPDATE_NEARBY_TRACKS = 'UPDATE_NEARBY_TRACKS'

const INITIAL_STATE = {
  tracks: []
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      return {
        ...state,
        current_song: action.current_song
      };
      case UPDATE_NEARBY_TRACKS:
          return {
            ...state,
            tracks: action.tracks
          };
    default:
      return state;
  }
};

export function fetchCurrentSong(jwt) {
  return async (dispatch) => {
    try {
      axios.get(`${api.url}/current-track`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        }
      })
      .then((response) => {
        console.log(response.data) // The entire response from the Rails API
        dispatch(
          {
            type: 'UPDATE_CURRENT_SONG',
            current_song: response.data
          }
        )
      })
   } catch(e) {
      console.log('error getting current user with JWT', e);
    }
  }
}

export function fetchAllNearby(lat, long) {
  return async (dispatch) => {
    try {
      axios.get(`${api.url}/nearby?latitude=${lat}&longitude=${long}`)
      .then((response) => {
        // console.log(response.data)
        dispatch(
          {
            type: 'UPDATE_NEARBY_TRACKS',
            tracks: response.data
          }
        )
      })
    } catch(e) {
      console.log('error getting nearby', e)
    }
  }
}

// export function processNewSong() {
//   return async (dispatch) => {
//     try {
//       if () {
//         dispatch(
//           {
//             type: 'UPDATE_CURRENT_SONG',
//             location: [pos.coords.longitude, pos.coords.latitude]
//           }
//         );
//       }
//     } catch (e) {
//       console.log('error getting current song', e);
//     }
//   }
// };
