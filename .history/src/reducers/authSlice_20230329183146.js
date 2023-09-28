import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Types from '../actions/actionTypes';
import authService from '../service/auth.service';
import storageService from '../service/storage.service';
import userService from '../service/user.service';

const initialState = { user: {}, token: '', loading: false, error: '' };

export const fetchUser = createAsyncThunk(Types.FETCH_USER, async () => {
  const user = await userService.getUser();
  return user;
});

export const signupUser = createAsyncThunk(Types.SIGN_UP, async (data) => {
  const response = await authService.signup(data);
  if (response) {
    if (response.token) await storageService.setToken(response.token);
  }
  return response;
});

export const loginUser = createAsyncThunk(Types.LOGIN, async (data) => {
  const response = await authService.login(data);
  if (response) {
    if (response.token) await storageService.setToken(response.token);
  }
  return response;
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
      const { token } = action.payload;
      state.token = token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = '';
    }
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      const data = action.payload;
      if (data) {
        if (data.token) state.token = data.token;
        if (data.user) state.user = data.user;
        state.loading = false;
        state.error = '';
      }
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, action) => {
      if (action.error) state.error = action.error.message;
      state.loading = false;
    },

    [signupUser.fulfilled]: (state, action) => {
      const data = action.payload;
      if (data) {
        if (data.token) state.token = data.token;
        if (data.user) state.user = data.user;
        state.loading = false;
        state.error = '';
      }
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUser.rejected]: (state, action) => {
      if (action.error) state.error = action.error.message;
      state.loading = false;
      console.log(action);
    },

    [fetchUser.fulfilled]: (state, action) => {
      const data = action.payload;
      if (data) {
        if (data.user) state.user = data.user.user;
        state.loading = false;
        state.error = '';
      }
    },
    [fetchUser.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUser.rejected]: (state, action) => {
      if (action.error) state.error = action.error.message;
      state.loading = false;
    },
  }
});


export const { handleLogin, handleSignup, logout } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;