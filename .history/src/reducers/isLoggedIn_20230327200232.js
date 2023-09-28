import Types from '../actions/actionTypes';
export default function gameData(state = false, action) {
    switch (action.type) {
      case Types.IS_LOGGED_IN:
        return updateSettings(state, action.payload);
      default:
        return state;
    }
  }
  