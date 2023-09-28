import { createAction } from 'redux-actions';
import Types from './actionTypes';

function login(data) {
  return createAction(Types.LOGIN)(data);
}

function signup(data) {
  return createAction(Types.SIGN_UP)(data);
}

export function handleLogin(data) {
  return dispatch => {
    dispatch(login(data))
  };
}

export function handleSignup(data) {
  return dispatch => {
    dispatch(signup(data))
  };
}