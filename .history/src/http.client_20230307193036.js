import axios from "axios";
import errorInterceptor from "./interceptor/error.interceptor";
import updateHeaderInterceptor from "./interceptors/updateHeader";
const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});

errorInterceptor(httpClient);

updateHeaderInterceptor(httpClient);

export default httpClient;