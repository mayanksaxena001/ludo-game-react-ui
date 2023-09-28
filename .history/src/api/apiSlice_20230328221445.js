import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { handleLogin, handleSignup, logout } from '../reducers/authData'

const baseQuery = fetchBaseQuery({
    // Fill in your own server starting URL here
    baseUrl: process.env.REACT_APP_BASE_API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('x-access-token', token);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token');
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            //store new token
            api.dispatch(handleLogin({ ...refreshResult, user }));
            //retry
            result = await baseQuery(args, api, extraOptions);

        } else {
            api.dispatch(logout);
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: build => ({
        // A query endpoint with no arguments
    })
})

