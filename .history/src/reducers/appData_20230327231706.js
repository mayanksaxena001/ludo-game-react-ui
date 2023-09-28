import Types from '../actions/actionTypes';
import authService from '../service/auth..service';
import storageService from '../service/storage.service';
const initialState = { user: {}, loading: false, error: '' };
const signup = async (data) => {
  const response = await authService.signup(data);
  if (response) {
    console.log(response);
  }
  return response;
}
const login = async (data) => {
  const response = await authService.login(data);
  if (response) {
    console.log(response);
    if (response.token) storageService.setToken(response.token);
  }
  return response;
}

export default function auth(state = initialState, action) {
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
        user: signup(action.payload)
      });
    default:
      return state;
  }
}
