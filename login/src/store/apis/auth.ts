import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://identitytoolkit.googleapis.com/v1/' }),
    endpoints: (build) => ({
        signUp: build.mutation({
            query(body) {
                return {
                    url: `accounts:signUp?key=AIzaSyCjX4UGjsPceNeJT2eUV1Wr4hP_lQU4duY`,
                    method: 'POST',
                    body,
                }
            },
        }),
        signIn: build.mutation({
            query(body) {
                return {
                    url: `accounts:signInWithPassword?key=AIzaSyCjX4UGjsPceNeJT2eUV1Wr4hP_lQU4duY`,
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
})

export const { useSignUpMutation, useSignInMutation } = authApi;