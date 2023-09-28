export function getToken() {
    //return token from storage
    return localStorage.getItem('authToken');
}
export function setToken(token) {
    //store token in storage
    localStorage.setItem('authToken', token);
}

export function clearStorage() {
    localStorage.clear();
}