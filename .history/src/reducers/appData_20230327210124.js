import Types from '../actions/actionTypes';
const initialState = { user: {} }
export default function appData(state = false, action) {
  switch (action.type) {
    case Types.IS_LOGGED_IN:
      return (state, !action.payload);
    default:
      return state;
  }
}
