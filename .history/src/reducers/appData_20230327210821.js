import Types from '../actions/actionTypes';
import authService from '../service/auth..service';
const initialState = { user: {}, active_game: {} };
const fetchUser = async () => {
  const user = await authService.login(data);
  console.log(user);
  return user;
}
export default function appData(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return Object.assign({},
        state,
        {
          user: fetchUser(action.payload)
        }
      );
    case Types.SIGN_UP:
      return Object.assign({}, state, {
        user: fetchUser(action.payload)
      });
    default:
      return state;
  }
}
