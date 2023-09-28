import { apiSlice } from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credential => ({
                url: '/auth',
                method: 'POST',
                bodry: { ...credential }
            })
        })
    })
})