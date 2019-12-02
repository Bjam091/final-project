import axios from 'axios';
import api from '../../utils/api';

export const JWT_PAYLOAD_RECEIVED = 'JWT_PAYLOAD_RECEIVED';
export const USER_PAYLOAD_RECEIVED = 'USER_PAYLOAD_RECEIVED';

const INITIAL_STATE = {
  user: {},
  jwt: '',
}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case JWT_PAYLOAD_RECEIVED:
      return { ...state, jwt: action.payload.data };
    case USER_PAYLOAD_RECEIVED:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
};

export function initializeJwt(username) {
  return async (dispatch) => {
    try {
      const data = await axios.post(`${api.url}/user_token`, { 'auth': { 'username': username }});
      dispatch({ type: JWT_PAYLOAD_RECEIVED, payload: data });
    } catch (e) {
      console.log('error posting to JWT endpoint', e);
    }
  }
};

export function initializeUser(jwt) {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${api.url}/users/current`, { headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + jwt}});
      dispatch({ type: USER_PAYLOAD_RECEIVED, payload: data });
    } catch(e) {
      console.log('error getting current user with JWT', e);
    }
  }
}
