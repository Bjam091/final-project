// import { combineReducers } from 'redux'

import {
  ADD_TODO,
  UPDATE_LOCATION,
} from './actions'

const initialState = {
  test: 'hi',
  location: [-123.1249, 49.2812],


}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        test: 'ja,sbfkasdbfajksdbfds',
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.location,
      }
    default:
      return state
  }
}



export default appReducer