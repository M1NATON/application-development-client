import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import {userAPI} from "./actions/userService.ts";
import {portfolioAPI} from "./actions/portfolioService.ts";
import {counselingAPI} from "./actions/counselingService.ts";
import {servicesAPI} from "./actions/servicesService.ts";
import {orderAPI} from "./actions/orderService.ts";




const rootReducer = combineReducers({
    user: userReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [portfolioAPI.reducerPath]: portfolioAPI.reducer,
    [counselingAPI.reducerPath]: counselingAPI.reducer,
    [servicesAPI.reducerPath]: servicesAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(userAPI.middleware, portfolioAPI.middleware, counselingAPI.middleware, servicesAPI.middleware, orderAPI.middleware)
        )

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']