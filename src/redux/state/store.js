import { configureStore } from "@reduxjs/toolkit";
import DrawerSlice from "../slice/DrawerSlice";
import { fetchApi } from "./fetchApi";

export const store = configureStore({
    reducer: {
        drawer: DrawerSlice,
        [fetchApi.reducerPath]: fetchApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware)
})


export default store;