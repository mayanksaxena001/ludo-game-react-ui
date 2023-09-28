import { combineReducers } from 'redux';
import gameData from './gameData';
import isLoggedIn from './isLoggedIn';

const rootReducer = combineReducers({
  gameData,isLoggedIn,
});

export default rootReducer;