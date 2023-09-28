import { useDispatch } from 'react-redux';
import { createAction } from 'redux-actions';
import Types from './actionTypes';
const dispatch = useDispatch();
function login(data) {
  return createAction(Types.LOGIN)(data);
}

function signup(data) {
  return createAction(Types.SIGN_UP)(data);
}

export function handleLogin(data) {
  return dispatch(login(data))
}

export function handleSignup(data) {
  return dispatch(signup(data))
}