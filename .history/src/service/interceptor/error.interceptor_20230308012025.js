const DEBUG = process.env.REACT_APP_NODE_ENV !== "production";
// import { setToken } from '../storage.service';
const errorInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use((response) => {
        // const token = response.headers["x-access-token"];
        // setToken(token);
        //Response Successful
        console.log(response);
    }, (error) => {
        // console.log(error);
        throw new Error(error.response.data.message);
        /*    if (error?.status?.code === 401) {
               //Unauthorized
               //redirect to Login*
           } else {
               //dispatch your error in a more user friendly manner*
               if (DEBUG) {
                   //easier debugging
                   console.group("Error");
                   console.log(error);
                   console.groupEnd();
               }
           } */
    });
};

export default errorInterceptor;