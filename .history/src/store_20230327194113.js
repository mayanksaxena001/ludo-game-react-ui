import { createStore } from 'redux';
import GameData from './models/gameData';
import rootReducer from './reducers';

const defaultState = GameData;

const store = createStore(rootReducer, defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;