import { combineReducers } from 'redux';
import gameData from './gameData';
import authReducer from './appData';

const rootReducer = combineReducers({
  gameData, authReducer,
});

export default rootReducer;