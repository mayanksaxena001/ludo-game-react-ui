import { apiSlice } from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credential => ({
                url: '/api/auth/login',
                method: 'POST',
                body: { ...credential }
            })
        }),
    })
})

export const {useLoginMutaton} = authApiSlice;