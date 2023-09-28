import StorageService from './storage.service';
class UserService {
    constructor() {
        this.token = StorageService.getToken();
        this.headers = {
            'Content-Type': 'application/json',
            'x-access-token': token
        };
    }
    getUser = () => {
        if (!this.token) throw new Error('token should not be null');
        const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/user/';
        return fetch(getByIdUrl, { method: 'GET', headers: this.headers })
            .then(response => {
                return response.json();
            })
    }

    updateUser = (data) => {
        if (!data || !this.token) throw new Error('Data/token  should not be null');
        const createGameUrl = process.env.REACT_APP_BASE_API_URL + '/api/user/';
        return fetch(createGameUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }
}
export default new UserService();
