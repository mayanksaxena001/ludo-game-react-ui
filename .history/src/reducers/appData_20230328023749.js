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
const signupUser = createAsyncThunk(Types.SIGN_UP, async (data) => {
  const response = await authService.signup(data);
  return response;
});

const loginUser = createAsyncThunk(Types.LOGIN, async (data) => {
  const response = await authService.login(data);
  return response;
});
const authSlice = createSlice({
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
  },
  extraReducers: {

    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      }
    },

    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },

    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      }
    },

    [signupUser.pending]: (state, action) => {
      state.loading = true;
    }
  }
});


export const { handleLogin, handleSignup } = authSlice.actions
export default authSlice.reducer