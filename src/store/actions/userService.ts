import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser, IUsers} from "../../models/models.ts";
import {API} from "../../api/API.ts";



export const userAPI = createApi({
    tagTypes: ['User'],
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${API}/auth`}),
    endpoints: (build) => ({
        registrationUser: build.mutation<IUsers, IUser>({
            query: (user: IUser) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        loginUser: build.mutation<IUsers, IUser>({
            query: (user: IUser) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        profileUser: build.query<IUser, void>({
            query: () => ({
                url: '/profile',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }),

        })
    })
})