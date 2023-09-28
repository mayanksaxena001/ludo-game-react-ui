export default ()=>{
    const getByIdUrl = process.env.REACT_APP_BASE_API_URL + '/api/game/';
    const getGameById=(id)=>{
        fetch(signup_url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        .then(response => {
          // console.log('Response ',response);
          return response.json();
        })
    }
}
