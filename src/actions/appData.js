import { createAction } from 'redux-actions';
import store from '../store';
import Types from './actionTypes';
function login(data) {
  return createAction(Types.LOGIN)(data);
}

function signup(data) {
  return createAction(Types.SIGN_UP)(data);
}

export function handleLogin(data) {
  return store.dispatch(login(data))
}

export function handleSignup(data) {
  return store.dispatch(signup(data))
}