import StorageService from './storage.service';
class UserService {
    constructor() {
        this.REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
        this.token = StorageService.getToken();
        this.headers = {
            'Content-Type': 'application/json',
            'x-access-token': this.token
        };
    }
    getUser = async () => {
        this.token = StorageService.getToken();
        if (!this.token) throw new Error('token should not be null');
        const getByIdUrl = this.REACT_APP_BASE_API_URL + '/api/user/';
        const response = await fetch(getByIdUrl, { method: 'GET', headers: this.headers });
        return await response.json();
    }

    updateUser = async (data) => {
        this.token = StorageService.getToken();
        if (!data || !this.token) throw new Error('Data/token  should not be null');
        const createGameUrl = this.REACT_APP_BASE_API_URL + '/api/user/';
        const response = await fetch(createGameUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) });
        return await response.json();
    }
}
export default new UserService();
