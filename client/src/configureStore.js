import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
//import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {

  const middlewares = [
    thunk,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  //const composeEnhancers = composeWithDevTools({ realtime: true, suppressConnectErrors: false, port: 32789, host: '192.168.168.43' }) || compose;
  //const composeEnhancers = composeWithDevTools({ realtime: true, suppressConnectErrors: false, port: 32789 }) || compose;
  const composeEnhancers = compose;

  const store = createStore(
    createReducer(),
    composeEnhancers(...enhancers)
  );

  store.injectedReducers = {};

  return { store };
}
