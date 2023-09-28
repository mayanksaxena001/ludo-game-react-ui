import { configureStore } from '@reduxjs/toolkit';
// import GameData from './models/gameData';
import gameDataReducer from './reducers/gameData';
import authReducer from './reducers/appData';

const defaultState = {};

const loggingMiddleware = store => next => action => {
    console.log('action:', action)
    const result = next(action)
    console.log('state after action:', store.getState())
    return result
}

// "Store next action" remember??
const asyncMiddleware = store => next => action => {
    // remember that "action" here is just whatever the *thing*
    // was, that was passed to `dispatch()`.
    // So we can check if it was passed a function.
    // In this case, we never call "next" at all.
    // So at this point, nothing else happens unless
    // our action creator dispatches something that is
    // a real action.
    if (typeof action === 'function') {
        // Instead, we can *call* the function that was dispatched
        // and instead, pass it the raw dispatch method from the store!
        // Now, our action creator has a reference to the dispatch method
        // and can dispatch whatever else it wants at whatever point
        // it wants to. Or, not at all.
        return action(dispatch)
    }
    // if it's not a function, just continue as normal
    return next(action)
}

const store = configureStore({
    reducer: {
        gameData: gameDataReducer,
        auth: authReducer,
    },
    middleware: [asyncMiddleware, loggingMiddleware]
});

// createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;