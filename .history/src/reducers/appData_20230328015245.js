import Types from '../actions/actionTypes';
import authService from '../service/auth..service';
import storageService from '../service/storage.service';
import userService from '../service/user.service';

const initialState = { user: {}, loading: false, error: '' };

const signup = async (data) => {
  const obj = {};
  obj.loading = true;
  const response = await authService.signup(data);
  if (response) {
    console.log(response);
    if (response.token) storageService.setToken(response.token);
    const user = await userService.getUser();
    obj.user = user;
    return user;
  }
  return obj;
}
const login = async (data) => {
  const obj = {};
  obj.loading = true;
  const response = await authService.login(data);
  if (response) {
    console.log(response);
    if (response.token) storageService.setToken(response.token);
    const user = await userService.getUser();
    obj.user = user;
    return user;
  }
  return obj;
}

export default async function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      const obj = await login(action.payload);
      console.log(obj);
      return { ...state, user: obj.user, loading: true, error: '' }
    case Types.SIGN_UP:
      const obj_ = await signup(action.payload);
      return Object.assign({}, state, { user: obj_.user, loading: obj_.loading, error: obj_.error });
    default:
      return state;
  }
}