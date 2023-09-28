import { setToken } from './storage.service';
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
};
export const login = (data) => {
    if (!data) throw new Error('Data/token  should not be null');
    const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/auth/';
    return fetch(getByIdUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => {
            return response.json();
        })
}

export const signup = (data) => {
    const createGameUrl = process.env.REACT_APP_BASE_API_URL + '/api/user/';
    return fetch(createGameUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => {
            return response.json();
        })
}
