const updateHeaderInterceptor = (axiosInstance) => {

    axiosInstance.interceptors.request.use((config) => {

    const jwtToken = "Bearer Token from Localstorage";

    config.headers["x-access-token"] = jwtToken;

    return * config *;
}, (* error *) => {

});

};

export default updateHeaderInterceptor;