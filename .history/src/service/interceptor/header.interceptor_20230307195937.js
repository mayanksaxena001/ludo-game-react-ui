import {getToken,setToken} from '../storage.service';
const updateHeaderInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
        const jwtToken = getToken();
        config.headers["x-access-token"] = jwtToken;
        return config;
    }, (error) => {
        console.log(error);
    });
};
export default updateHeaderInterceptor;