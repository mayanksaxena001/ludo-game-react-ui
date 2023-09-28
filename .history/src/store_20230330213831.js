import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
// import gameDataReducer from './reducers/gameData';
import authSlice from './reducers/authSlice';
import gameDataSlice from './reducers/gameDataSlice';
import gameSlice from './reducers/gameSlice';
import { listenerMiddleware } from './reducers/listenerMiddleware';
import userSlice from './reducers/userSlice';

const store = configureStore({
    reducer: {
        gameData: gameDataSlice,
        auth: authSlice,
        game: gameSlice,
        user: userSlice,
        // [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: process.env.NODE_ENV === 'development' && true,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;