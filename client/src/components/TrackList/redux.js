export const UPDATE_CURRENT_SONG = 'UPDATE_CURRENT_SONG';
export const UPDATE_NEARBY_TRACKS = 'UPDATE_NEARBY_TRACKS'
import axios from 'axios';


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
      axios.get('https://listen-in.herokuapp.com/current-track', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        }
      })
      .then((response) => {
        dispatch(
          {
            type: 'UPDATE_CURRENT_SONG',
            current_song: response.data
          }
        )
      })
   } catch(e) {
      console.log('error getting current song with JWT', e);
    }
  }
}

export function fetchAllNearby(lat, long) {
  return async (dispatch) => {
    try {
      axios.get(`https://listen-in.herokuapp.com/nearby?latitude=${lat}&longitude=${long}`)
      .then((response) => {
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