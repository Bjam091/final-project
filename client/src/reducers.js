import { combineReducers } from 'redux';
import AuthReducer from './components/Auth/redux';
import LightMapReducer from './components/Map/redux';


export default function createReducer(injectedReducers) {
  return combineReducers({
    auth: AuthReducer,
    loc: LightMapReducer,
    ...injectedReducers,
  });
}
