const methods = {
    getToken() {
        //return token from storage
        return localStorage.getItem('authToken');
    },
    setToken(token) {
        //store token in storage
        localStorage.setItem('authToken', token);
    },
    clearStorage() {
        localStorage.clear();
    }
}
export default methods;