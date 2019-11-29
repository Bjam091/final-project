// import { combineReducers } from 'redux'

import {
  UPDATE_LOCATION,
  UPDATE_MESSAGE,
  UPDATE_CURRENT_SONG
} from './actions'

const initialState = {
  test: 'hi',
  location: [-123.1249, 49.2812],
  message: "Songs go here!",
  tracks: [
    { id: 1, artist: "Enya", title: "Orinoco Flow", albumcover: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, artist: "Moby", title: "Porcelain", albumcover: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, artist: "Led Zeppelin", title: "Stairway to Heaven", albumcover: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, artist: "Ludovico Einaudi", title: "Divenire", albumcover: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, artist: "Crosby Stills & Nash", title: "Cathedral", albumcover: "https://i.imgur.com/twYrpay.jpg" }
  ],
  zoom: [14],
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.location,
      }
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      }
    case UPDATE_CURRENT_SONG: 
      return {
        ...state,
        current_track_example: action.current_track_example
      }
    default:
      return state
  }
}



export default appReducer