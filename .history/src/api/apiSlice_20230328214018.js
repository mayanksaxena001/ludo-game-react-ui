import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { handleLogin, handleSignup, logout } from '../reducers/authData'

export const api = createApi({
    baseQuery: fetchBaseQuery({
        // Fill in your own server starting URL here
        baseUrl: process.env.REACT_APP_BASE_API_URL
    }),
    endpoints: build => ({
        // A query endpoint with no arguments
        getTodos: build.query({
            query: () => '/todos'
        }),
        // A query endpoint with an argument
        userById: build.query({
            query: userId => `/users/${userId}`
        }),
        // A mutation endpoint
        updateTodo: build.mutation({
            query: updatedTodo => ({
                url: `/todos/${updatedTodo.id}`,
                method: 'POST',
                body: updatedTodo
            })
        })
    })
})

export const { useGetTodosQuery, useUserByIdQuery, useUpdateTodoMutation } = api