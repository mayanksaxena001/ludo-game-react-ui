import StorageService from './storage.service';
class GameService {
    constructor() {
        this.REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
        this.token = StorageService.getToken();
        this.headers = {
            'Content-Type': 'application/json',
            'x-access-token': this.token
        };
    }
    getGameById = async (id) => {
        if (!id || !this.token) throw new Error('Id or token should not be null');
        const body = { id: id };
        const getByIdUrl = this.REACT_APP_BASE_API_URL + '/api/game/';
        const response = await fetch(getByIdUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(body) });
        return await response.json();
    }

    getGameInfoById = async (id) => {
        if (!id || !this.token) throw new Error('Id or token should not be null');
        const body = { game_id: id };
        const getByIdUrl = this.REACT_APP_BASE_API_URL + '/api/game/info';
        const response = await fetch(getByIdUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(body) });
        return await response.json();
    }

    createGame = async (data) => {
        if (!data || !this.token) throw new Error('Data/token  should not be null');
        const createGameUrl = this.REACT_APP_BASE_API_URL + '/api/game/create';
        const response = await fetch(createGameUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) });
        return await response.json();
    }

    getAllActiveGames = async () => {
        if (!this.token) throw new Error('Id or token should not be null');
        const getByIdUrl = this.REACT_APP_BASE_API_URL + '/api/game/all';
        const response = await fetch(getByIdUrl, { method: 'GET', headers: this.headers });
        return await response.json();
    }
    joinGame = async (data) => {
        if (!data || !this.token) throw new Error('Data or token should not be null');
        const joinGameUrl = this.REACT_APP_BASE_API_URL + '/api/game/join';
        const response = await fetch(joinGameUrl, { method: 'POST', headers: this.headers, body: JSON.stringify(data) });
        return await response.json();
    }
}
export default new GameService();
