import axios from "axios";
import errorInterceptor from "./interceptor/error.interceptor";
import updateHeaderInterceptor from "./interceptor/header.interceptor";
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});
errorInterceptor(axiosInstance);
updateHeaderInterceptor(axiosInstance);
export default axiosInstance;