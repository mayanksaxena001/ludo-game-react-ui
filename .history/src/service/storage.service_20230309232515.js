export function getToken() {
    //return token from storage
    return this.token;
}
export function setToken(token) {
    //store token in storage
    localStorage.setItem('authToken', token);
}

export function clearStorage() {
    localStorage.clear();
}

class StorageService{
    constructor(){
        this.token = localStorage.getItem('authToken');
    }
}
export default new StorageService();