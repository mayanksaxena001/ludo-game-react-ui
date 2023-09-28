import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import gameDataReducer from './reducers/gameData';
import authSlice from './reducers/authSlice';
import gameSlice from './reducers/gameSlice';
import userSlice from './reducers/userSlice';

const store = configureStore({
    reducer: {
        gameData: gameDataReducer,
        auth: authSlice,
        game: gameSlice,
        user: userSlice,
        // [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: true
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;