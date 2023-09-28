import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import rootReducer from './reducers';

const defaultState = {};

const store = configureStore(rootReducer, defaultState);

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;