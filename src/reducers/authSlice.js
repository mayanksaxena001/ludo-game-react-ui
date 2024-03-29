import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Types from '../actions/actionTypes';
import authService from '../service/auth.service';
import storageService from '../service/storage.service';
//TODO: use authenticated flag and user id 
const initialState = { token: '', loading: false, error: '' };

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
    reset: () => initialState
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const data = action.payload;
      if (data) {
        if (data.token) state.token = data.token;
        state.loading = false;
        state.error = '';
      }
    }).addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    }).addCase(loginUser.rejected, (state, action) => {
      if (action.error) state.error = action.error.message;
      state.loading = false;
    })
      .addCase(signupUser.fulfilled, (state, action) => {
        const data = action.payload;
        if (data) {
          if (data.token) state.token = data.token;
          state.loading = false;
          state.error = '';
        }
      }).addCase(signupUser.pending, (state, action) => {
        state.loading = true;
      }).addCase(signupUser.rejected, (state, action) => {
        //TODO : add rejected condition
        if (action.error) state.error = action.error.message;
        state.loading = false;
      })
  }
});


export const { reset: resetAuthData } = authSlice.actions
export default authSlice.reducer
