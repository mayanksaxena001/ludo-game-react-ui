import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Types from '../actions/actionTypes';
import authService from '../service/auth.service';
import storageService from '../service/storage.service';
import userService from '../service/user.service';

const initialState = { user: {}, loading: false, error: '' };

const signup = async (data) => {
  const obj = {};
  obj.loading = true;
  const response = await authService.signup(data);
  if (response) {
    console.log(response);
    if (response.token) storageService.setToken(response.token);
    const user = await userService.getUser();
    obj.user = user;
    return user;
  }
  return obj;
}
const login = (data) => {
  const obj = {};
  obj.loading = true;
  const response = authService.login(data).then(data => obj = data).catch(err => obj.error = err);
  if (response) {
    console.log(response);
    if (response.token) storageService.setToken(response.token);
    const user = userService.getUser();
    obj.user = user;
    return user;
  }
  return obj;
}

const authReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    handleLogin(state, action) {
      const obj = action.payload;
      return { ...state, user: obj.user, loading: true, error: '' };
    },
    handleSignup(state, action) {
      const obj = action.payload;
      return { ...state, user: obj.user, loading: true, error: '' };
    }
  }
});
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      const obj = login(action.payload);
      return { ...state, user: obj.user, loading: true, error: '' }
    case Types.SIGN_UP:
      const obj_ = signup(action.payload);
      return Object.assign({}, state, { user: obj_.user, loading: obj_.loading, error: obj_.error });
    default:
      return state;
  }
}
