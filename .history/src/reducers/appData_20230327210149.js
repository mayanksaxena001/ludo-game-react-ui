import Types from '../actions/actionTypes';
const initialState = { user: {} ,active_game:{}}
export default function appData(state = initialState, action) {
  switch (action.type) {
    case Types.IS_LOGGED_IN:
      return (state, !action.payload);
    default:
      return state;
  }
}
