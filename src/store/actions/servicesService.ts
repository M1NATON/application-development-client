import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../api/API.ts";
import { IServices } from "../../models/models.ts";

export const servicesAPI = createApi({
    tagTypes: ['Services'],
    reducerPath: 'servicesAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({

        fetchAllServices: build.query<IServices[], void>({
            query: () => ({
                url: '/services'
            }),
            providesTags: ['Services']
        }),

        createService: build.mutation<IServices, IServices>({
            query: (body) => ({
                url: '/services',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Services']
        }),
     
        updateService: build.mutation<IServices, { id: number, data: IServices }>({
            query: ({ id, data }) => ({
                url: `/services/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Services']
        }),
    
        deleteService: build.mutation<void, number>({
            query: (id) => ({
                url: `/services/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Services']
        })
    })
});
