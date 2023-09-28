import {getToken} from '../storage.service';
const updateHeaderInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use((req) => {
        const jwtToken = getToken();
        req.headers["x-access-token"] = jwtToken;
        return req;
    }, (error) => {
        console.log(error);
    });
};
export default updateHeaderInterceptor;