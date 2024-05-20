import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPortfolio } from "../../models/models.ts";
import { API } from "../../api/API.ts";

export const portfolioAPI = createApi({
    tagTypes: ['Portfolio'],
    reducerPath: 'portfolioAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({

        fetchAllPortfolio: build.query<IPortfolio[], void>({
            query: () => ({
                url: '/portfolio'
            }),
            providesTags: ['Portfolio']
        }),

        createPortfolio: build.mutation<IPortfolio, IPortfolio>({
            query: (body) => ({
                url: '/portfolio',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Portfolio']
        }),
  
        updatePortfolio: build.mutation<IPortfolio, { id: number, data: IPortfolio }>({
            query: ({ id, data }) => ({
                url: `/portfolio/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Portfolio']
        }),
     
        deletePortfolio: build.mutation<void, number>({
            query: (id) => ({
                url: `/portfolio/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Portfolio']
        })
    })
});
