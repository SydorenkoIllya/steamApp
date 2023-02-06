import { configureStore } from '@reduxjs/toolkit';
import pages from '../components/Carousel/carouselSlice';
import { apiSlice } from '../api/apiSlice'; 


const store = configureStore({
    reducer: {pages, [apiSlice.reducerPath]: apiSlice.reducer},
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

