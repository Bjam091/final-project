import axios from 'axios';
import api from '../../utils/api';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

const INITIAL_STATE = {
  location: [-123.1156, 49.2797],
  zoom: [14],
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
};

// Function to change location state
export function processNewPosition(pos) {
  return async (dispatch) => {
    try {
      if (pos && pos.coords) {
        dispatch(
          {
            type: 'UPDATE_LOCATION',
            location: [pos.coords.longitude, pos.coords.latitude]
          }
        );
      }
    } catch (e) {
      console.log('error getting current position', e);
    }
  }
};

export function addCoordsToUser(userId, latitude, longitude) {
  return async () => {
    try {
        await axios.put(`${api.url}/users/coords?user_id=${userId}`, {
          "coords": {
            "latitude": latitude,
            "longitude": longitude
          }
        })
    } catch (e) {
      console.log('error getting logging user position to db', e);
    }
  }
};
