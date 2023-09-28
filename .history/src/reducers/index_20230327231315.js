import { combineReducers } from 'redux';
import gameData from './gameData';
import auth from './appData';

const rootReducer = combineReducers({
  gameData, authReducer: auth,
});

export default rootReducer;