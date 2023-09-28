import Types from '../actions/actionTypes';
import authService from '../service/auth..service';
import storageService from '../service/storage.service';
const initialState = { user: {}, active_game: {} };
const login = async (data) => {
  const response = await authService.login(data);
  if(response){
    console.log(response);
    storageService.setToken(response.token);
  }
  return user;
}
export default function appData(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return Object.assign({},
        state,
        {
          user: login(action.payload)
        }
      );
    case Types.SIGN_UP:
      return Object.assign({}, state, {
        user: login(action.payload)
      });
    default:
      return state;
  }
}
