import Types from '../actions/actionTypes';
import authService from '../service/auth..service';
import storageService from '../service/storage.service';
import userService from '../service/user.service';
const initialState = { user: {}, loading: false, error: '' };
const signup = async (data) => {
  const response = await authService.signup(data);
  if (response) {
    console.log(response);
  }
  return response.user;
}
const login = async (data) => {
  const obj = {};
  const response = await authService.login(data);
  if (response) {
    console.log(response);
    if (response.token) storageService.setToken(response.token);
    const user = await userService.getUser();
    obj.user = user;
    return user;
  }
  return null;
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      const obj = login(action.payload);
      return Object.assign({},
        state,
        {
          user: obj.user,
          loading: true
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
