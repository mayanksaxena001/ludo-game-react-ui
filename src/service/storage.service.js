
class StorageService {
    constructor() {
        this.token = localStorage.getItem('authToken');
    }
    getToken = () => {
        //return token from storage
        return localStorage.getItem('authToken');
    }
    setToken =async(token) => {
        //store token in storage
        this.token = token;
        localStorage.setItem('authToken', token);
    }

    clearStorage = () => {
        this.token = '';
        localStorage.clear();
    }
}
export default new StorageService();