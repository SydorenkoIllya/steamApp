import { configureStore } from '@reduxjs/toolkit';
import pages from '../components/Carousel/carouselSlice';
import { apiSlice } from '../api/apiSlice';
import { gamesSlice } from '../components/GamesList/gamesSlice'
import { appSlice } from '../components/App/appSlice'







const store = configureStore({
    reducer: { pages, [appSlice.name]: appSlice.reducer, [gamesSlice.name]: gamesSlice.reducer, [apiSlice.reducerPath]: apiSlice.reducer },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware)
})


export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

