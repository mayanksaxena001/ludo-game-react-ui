import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Types from '../actions/actionTypes';
import authService from '../service/auth.service';
import storageService from '../service/storage.service';
import userService from '../service/user.service';

const initialState = { user: {}, token: '', loading: false, error: '' };

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
const signupUser = createAsyncThunk(Types.SIGN_UP, async (data) => {
  const response = await authService.signup(data);
  const user = await userService.getUser();
  const result = { response, user }
  return result;
});

const loginUser = createAsyncThunk(Types.LOGIN, async (data) => {
  const response = await authService.login(data);
  const user = await userService.getUser();
  const result = { response, user }
  return result;
});
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    handleLogin: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },
    handleSignup: (state, action) => {

    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = '';
    }
  },
  extraReducers: {

    [loginUser.fulfilled]: (state, { data, error }) => {
      if (data) {
        state.loading = false;
        state.error = '';
      } else if (error) state.error = error;
    },

    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },

    [signupUser.fulfilled]: (state, { data, error }) => {
      if (data) {
        state.loading = false;
        state.error = '';
      } else if (error) state.error = error;
    },

    [signupUser.pending]: (state, action) => {
      state.loading = true;
    }
  }
});


export const { handleLogin, handleSignup } = authSlice.actions
export default authSlice.reducer