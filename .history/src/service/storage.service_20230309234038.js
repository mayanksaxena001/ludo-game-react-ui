
class StorageService {
    constructor() {
        this.token = localStorage.getItem('authToken');
    }
    getToken = () => {
        //return token from storage
        return this.token;
    }
    setToken = (token) => {
        //store token in storage
        this.token = token;
        localStorage.setItem('authToken', this.token);
    }

    clearStorage = () => {
        this.token = '';
        localStorage.clear();
    }
}
export default new StorageService();