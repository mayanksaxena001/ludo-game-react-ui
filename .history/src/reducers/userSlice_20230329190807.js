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

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {

  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      const data = action.payload;
      if (data) {
        if (data.user) state.user = data.user;
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


export const { } = authSlice.actions
export default authSlice.reducer
