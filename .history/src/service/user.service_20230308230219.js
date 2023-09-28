import { getToken } from './storage.service';
const token = getToken();
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
};
export const getUser = () => {
    if (!token) throw new Error('token should not be null');
    const body = { };
    const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/user/';
    return fetch(getByIdUrl, { method: 'GET', headers: headers, body: JSON.stringify(body) })
        .then(response => {
            return response.json();
        })
}

export const updateUser = (data) => {
    if (!data || !token) throw new Error('Data/token  should not be null');
    const createGameUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/';
    return fetch(createGameUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => {
            return response.json();
        })
}
