export default () => {
    const getGameById = (id) => {
        if (!id) throw new Error('Id should not be null');
        body = {};
        const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/' + id;
        fetch(signup_url, { method: 'GET', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
            .then(response => {
                // console.log('Response ',response);
                return response.json();
            })
    }

    const createGame = (data) => {
        if (!data) throw new Error('Data should not be null');
        const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/' ;
        fetch(signup_url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
            .then(response => {
                // console.log('Response ',response);
                return response.json();
            })
    }
}
