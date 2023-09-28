import { createAction } from 'redux-actions';
import Types from './actionTypes';

function login(data) {
  return createAction(Types.LOGIN)(data);
}

export function updateLoggedIn(data) {
  return dispatch => {
    dispatch(setLoggedIn(data))
  };
}