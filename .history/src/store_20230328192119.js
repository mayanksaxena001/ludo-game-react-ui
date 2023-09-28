import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import gameDataReducer from './reducers/gameData';
import authReducer from './reducers/authData';

const defaultState = {};

const loggingMiddleware = store => next => action => {
    console.log('action:', action)
    const result = next(action)
    console.log('state after action:', store.getState())
    return result
}


const store = configureStore({
    reducer: {
        gameData: gameDataReducer,
        auth: authReducer,
    },
    middleware: [loggingMiddleware]
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;