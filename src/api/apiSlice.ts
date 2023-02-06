import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface IPost {
    appId: string,
    title: string,
    url: string,
    imgUrl: string,
    realeased: string,
    reviewSummary: string,
    price: string
}
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://steam2.p.rapidapi.com'}),
    endpoints: builder => ({
        getGames: builder.query<IPost[], string>({
            query: () => ({
                url: '/search/Counter/page/1',
                headers: {
                    'X-RapidAPI-Key': '3eacbfc688msh7a78712d81522b8p1f5170jsn6af9e54d8b39',
                    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
                  }
            })
        })
    })

})

export const {useGetGamesQuery} = apiSlice