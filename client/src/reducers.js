import { combineReducers } from 'redux';
import AuthReducer from './components/Auth/redux';

export default function createReducer(injectedReducers) {
  return combineReducers({
    auth: AuthReducer,
    //location: LocationReducer (should be in map folder as "redux.js" - look at Auth for example.)
    ...injectedReducers,
  });
}
