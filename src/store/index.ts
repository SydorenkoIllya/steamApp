import { configureStore } from '@reduxjs/toolkit';
// import filters from '../components/heroesFilters/filtersSlice';
// import { apiSlice } from '../api/apiSlice'; 


const store = configureStore({
    reducer: {},
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store;