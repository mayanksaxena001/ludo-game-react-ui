import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import gameDataReducer from './reducers/gameData';
import authReducer from './reducers/authData';
import {apiSlice} from './api/apiSlice';


const store = configureStore({
    reducer: {
        gameData: gameDataReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;