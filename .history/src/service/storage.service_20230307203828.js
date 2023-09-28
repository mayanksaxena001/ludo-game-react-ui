const getToken = () => {
    //return token from storage
}
const setToken = (token) => {
    //store token in storage
    localStorage.setItem('authToken', token);
}
export default { getToken, setToken }