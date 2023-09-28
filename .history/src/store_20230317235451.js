import { createStore } from 'redux';
import GameData from './components/models/gameData';
import rootReducer from './reducers';

const defaultState = {};

const store = createStore(rootReducer, defaultState);

export default store;