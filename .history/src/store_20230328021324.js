import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import gameData from './reducers/gameData';
import auth from './reducers/appData';

const defaultState = {};

const store = configureStore({
    reducer: {
        auth: auth,
        gameData: gameData
    }
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;