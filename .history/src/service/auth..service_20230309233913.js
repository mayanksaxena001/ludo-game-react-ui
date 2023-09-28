import StorageService from './storage.service';

class AuthService {
    constructor() {
        this.REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
        this.headers = {
            'Content-Type': 'application/json',
        };
    }
    login = async (data) => {
        if (!data) throw new Error('Data should not be null');
        const loginUrl = this.REACT_APP_BASE_API_URL + '/api/auth/login';
        const response = await fetch(loginUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) });
        console.log(response);
        return await response.json();
    }

    signup = async (data) => {
        if (!data) throw new Error('Data should not be null');
        const signupUrl = this.REACT_APP_BASE_API_URL + '/api/auth/signup';
        const response = await fetch(signupUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) });
        return await response.json();
    }
}
export default new AuthService();
