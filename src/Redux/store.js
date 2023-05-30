import { configureStore } from "@reduxjs/toolkit";
import { destinationApi } from "../api/DestinationApi";
import { RandomDestinationApi } from "../api/RandomDestinationApi";
export const store = configureStore({
    reducer:{
        [destinationApi.reducerPath]: destinationApi.reducer,
        [RandomDestinationApi.reducerPath]: RandomDestinationApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(destinationApi.middleware).concat(RandomDestinationApi.middleware),
})