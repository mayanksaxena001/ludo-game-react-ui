import { createAction } from 'redux-actions';
import Types from './actionTypes';

function setLoggedIn(data) {
  return createAction(Types.IS_LOGGED_IN)(data);
}

export function updateLoggedIn(data) {
  return dispatch => {
    dispatch(setLoggedIn(data))
  };
}