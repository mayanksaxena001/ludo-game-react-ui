import { combineReducers } from 'redux';
import gameData from './gameData';
import auth from './appData';

const rootReducer = combineReducers({
  gameData, auth,
});

export default rootReducer;