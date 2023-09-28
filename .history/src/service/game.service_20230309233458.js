import StorageService from './storage.service';
class GameService {
    constructor() {
        this.REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
        this.token = StorageService.getToken();
        this.headers = {
            'Content-Type': 'application/json',
            'x-access-token': token
        };
    }
    getGameById = (id) => {
        if (!id || !this.token) throw new Error('Id or token should not be null');
        const body = { id: id };
        const getByIdUrl = this.REACT_APP_BASE_API_URL + '/api/game/';
        return fetch(getByIdUrl, { method: 'GET', headers: this.headers, body: JSON.stringify(body) })
            .then(response => {
                return response.json();
            })
    }

    createGame = (data) => {
        if (!data || !token) throw new Error('Data/token  should not be null');
        const createGameUrl = REACT_APP_BASE_API_URL + '/api/game/';
        return fetch(createGameUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }

    getAllActiveGames = () => {
        if (!token) throw new Error('Id or token should not be null');
        const getByIdUrl = this.REACT_APP_BASE_API_URL + '/api/game/all';
        return fetch(getByIdUrl, { method: 'GET', headers: this.headers })
            .then(response => {
                return response.json();
            })
    }
    joinGame = (data) => {
        if (!data || !token) throw new Error('Data or token should not be null');
        const joinGameUrl = this.REACT_APP_BASE_API_URL + '/api/game/join';
        return fetch(joinGameUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }
}
export default new GameService();
