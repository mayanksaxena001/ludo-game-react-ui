import StorageService from './storage.service';


class GameService {
    constructor() {
        this.token = StorageService.getToken();
        this.headers = {
            'Content-Type': 'application/json',
            'x-access-token': token
        };
    }
    getGameById = (id) => {
        if (!id || !token) throw new Error('Id or token should not be null');
        const body = { id: id };
        const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/';
        return fetch(getByIdUrl, { method: 'GET', headers: headers, body: JSON.stringify(body) })
            .then(response => {
                return response.json();
            })
    }

    createGame = (data) => {
        if (!data || !token) throw new Error('Data/token  should not be null');
        const createGameUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/';
        return fetch(createGameUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }

    getAllActiveGames = () => {
        if (!token) throw new Error('Id or token should not be null');
        const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/all';
        return fetch(getByIdUrl, { method: 'GET', headers: headers })
            .then(response => {
                return response.json();
            })
    }
    joinGame = (data) => {
        if (!data || !token) throw new Error('Data or token should not be null');
        const joinGameUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/join';
        return fetch(joinGameUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }
}
export default new GameService();
