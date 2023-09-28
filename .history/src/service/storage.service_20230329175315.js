
class StorageService {
    constructor() {
        this.token = localStorage.getItem('authToken');
    }
    getToken = () => {
        //return token from storage
        return localStorage.getItem('authToken');
    }
    setToken = (token) => {
        //store token in storage
        localStorage.setItem('authToken', token);
    }

    clearStorage = () => {
        this.token = '';
        localStorage.clear();
    }
}
export default new StorageService();