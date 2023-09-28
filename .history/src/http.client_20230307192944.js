import axios from "axios";
import errorInterceptor from "/interceptors/error";
import updateHeaderInterceptor from "./interceptors/updateHeader";
const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

errorInterceptor(httpClient);

updateHeaderInterceptor(httpClient);

export default httpClient;