import StorageService from './storage.service';

class AuthService {
    constructor() {
        this.REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
        this.headers = {
            'Content-Type': 'application/json',
        };
    }
    login = (data) => {
        if (!data) throw new Error('Data should not be null');
        const loginUrl = this.REACT_APP_BASE_API_URL + '/api/auth/login';
        return fetch(loginUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) })
            .then(response => {
                console.log(response);
                return response.json();
            })
    }

    signup = (data) => {
        if (!data) throw new Error('Data should not be null');
        const signupUrl = this.REACT_APP_BASE_API_URL + '/api/auth/signup';
        return fetch(signupUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }
}
export default new AuthService();
