import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Types from '../actions/actionTypes';
import userService from '../service/user.service';

const initialState = { user: {}, loading: false, error: '' };

export const fetchUser = createAsyncThunk(Types.FETCH_USER, async () => {
    const user = await userService.getUser();
    return user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const data = action.payload;
            if (data) {
                if (data.user) state.user = data.user;
                state.loading = false;
                state.error = '';
            }
        }).addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
        }).addCase(fetchUser.rejected, (state, action) => {
            if (action.error) state.error = action.error.message;
            state.loading = false;
        },)
    }
});


export default userSlice.reducer
