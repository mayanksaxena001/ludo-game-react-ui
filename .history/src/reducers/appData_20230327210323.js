import Types from '../actions/actionTypes';
const initialState = { user: {} ,active_game:{}}
export default function appData(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return Object.assign({},
        state,
        {
          user: fetchUser(action.payload)
        }
      );
    default:
      return state;
  }
}
