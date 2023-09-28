import Types from '../actions/actionTypes';
export default function gameData(state = false, action) {
    switch (action.type) {
      case Types.UPDATE_BOARD_SETTINGS:
        return updateSettings(state, action.payload);
      default:
        return state;
    }
  }
  