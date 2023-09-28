import { combineReducers } from 'redux';
import gameData from './gameData';
import appData from './appData';

const rootReducer = combineReducers({
  gameData, appData,
});

export default rootReducer;