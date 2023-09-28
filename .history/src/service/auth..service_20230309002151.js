import { setToken } from './storage.service';
const headers = {
    'Content-Type': 'application/json',
};
export const login = (data) => {
    if (!data) throw new Error('Data should not be null');
    const loginUrl = process.env.REACT_APP_BASE_API_URL + '/api/auth/login';
    return fetch(loginUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => {
            return response.json();
        })
}

export const signup = (data) => {
    if (!data) throw new Error('Data should not be null');
    const signupUrl = process.env.REACT_APP_BASE_API_URL + '/api/auth/signup';
    return fetch(signupUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => {
            return response.json();
        })
}
