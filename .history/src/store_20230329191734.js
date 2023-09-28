import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import gameDataReducer from './reducers/gameData';
import authReducer from './reducers/authSlice';
import { apiSlice } from './api/apiSlice';
import gameSlice from './reducers/gameSlice';
import userSlice from './reducers/userSlice';

const store = configureStore({
    reducer: {
        gameData: gameDataReducer,
        auth: authReducer,
        game: gameSlice,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: true
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;