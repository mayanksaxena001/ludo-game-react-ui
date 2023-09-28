import { getToken } from './storage.service';
const token = getToken();
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
};
export default () => {
    const getGameById = (id) => {
        if (!id) throw new Error('Id should not be null');
        body = {};
        const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/' + id;
        return fetch(getByIdUrl, { method: 'GET', headers: headers, body: JSON.stringify(body) })
            .then(response => {
                return response.json();
            })
    }

    const createGame = (data) => {
        if (!data) throw new Error('Data should not be null');
        const createGameUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/';
        return fetch(createGameUrl, { method: 'POST', headers: headers, body: JSON.stringify(data) })
            .then(response => {
                return response.json();
            })
    }
}
