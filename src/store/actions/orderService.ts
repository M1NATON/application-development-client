import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOrder} from "../../models/models.ts";
import {API} from "../../api/API.ts";

export const orderAPI = createApi({
    tagTypes: ['Order'],
    reducerPath: 'orderAPI',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    endpoints: (build) => ({
        createOrderUser: build.mutation<IOrder, IOrder>({
            query: (body)=> ({
                url: '/orders',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Order']
        }),
        fetchOrderUser: build.query<IOrder[], number | null | undefined>({
            query: (userId) => ({
                url: `/orders/user/${userId}`,
            }),
            providesTags: ['Order']
        }),
   
        getAllOrders: build.query<IOrder[], void>({
            query: () => '/orders',
            providesTags: ['Order']
        }),
     
        updateOrder: build.mutation<IOrder, { id: number, data: IOrder }>({
            query: ({ id, data }) => ({
                url: `/orders/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Order']
        }),
      
        deleteOrder: build.mutation<void, number>({
            query: (id) => ({
                url: `/orders/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Order']
        })
    })
});
