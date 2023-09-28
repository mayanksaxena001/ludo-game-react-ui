import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
// import gameDataReducer from './reducers/gameData';
import authSlice from './reducers/authSlice';
import gameDataSlice from './reducers/gameDataSlice';
import gameSlice from './reducers/gameSlice';
import socketReducer from './reducers/socketReducer';
// import { createMySocketMiddleware } from './reducers/socketMiddleware';
import userSlice from './reducers/userSlice';

// const loggerMiddleware = storeAPI => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', storeAPI.getState())
//     return result
// }

const store = configureStore({
    reducer: {
        gameData: gameDataSlice,
        auth: authSlice,
        game: gameSlice,
        user: userSlice,
        socket: socketReducer,
        // [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: process.env.NODE_ENV === 'development' && true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
    // .concat(loggerMiddleware),
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;