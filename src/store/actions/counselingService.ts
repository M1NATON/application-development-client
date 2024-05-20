import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICounseling } from "../../models/models.ts";
import { API } from "../../api/API.ts";

export const counselingAPI = createApi({
    tagTypes: ['Counseling'],
    reducerPath: 'counselingAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        createCounselingUser: build.mutation<ICounseling, ICounseling>({
            query: (body) => ({
                url: '/counseling',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Counseling']
        }),
     
        getAllCounseling: build.query<ICounseling[], void>({
            query: () => '/counseling',
            providesTags: ['Counseling']
        }),
   
        updateCounseling: build.mutation<ICounseling, { id: number, data: ICounseling }>({
            query: ({ id, data }) => ({
                url: `/counseling/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Counseling']
        }),
      
        deleteCounseling: build.mutation<void, number>({
            query: (id) => ({
                url: `/counseling/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Counseling']
        })
    })
});
