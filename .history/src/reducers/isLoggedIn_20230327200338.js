import Types from '../actions/actionTypes';
export default function isLoggedIn(state = false, action) {
    switch (action.type) {
      case Types.IS_LOGGED_IN:
        return (state, action.payload);
      default:
        return state;
    }
  }
  