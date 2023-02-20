import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface IPost {
    appId: string,
    title: string,
    url: string,
    imgUrl: string,
    released: string,
    reviewSummary: string,
    price: string
}


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://steam2.p.rapidapi.com/' }),
    endpoints: builder => ({
        getGames: builder.query<IPost[], string>({
            query: () => ({
                url: 'search/Counter/page/1',
                headers: {
                    'X-RapidAPI-Key': '97cdc642b2mshc7dd995f011a6e4p1a15cejsnd12161e68a80',
                    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
                }
            })
        })
    })

})

export const { useGetGamesQuery } = apiSlice