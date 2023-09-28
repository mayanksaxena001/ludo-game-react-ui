import { createStore } from 'redux';
import GameData from './components/models/gameData';
import rootReducer from './reducers';

const defaultState = GameData;

const store = createStore(rootReducer, defaultState);

export default store;