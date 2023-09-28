export function getToken() {
    //return token from storage
    return this.token;
}
export function setToken(token) {
    //store token in storage
    this.token = token;
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