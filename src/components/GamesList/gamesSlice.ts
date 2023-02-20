import { createSlice } from "@reduxjs/toolkit";
import dayjs from 'dayjs';

interface IPost {
    appId: string,
    title: string,
    url: string,
    imgUrl: string,
    released: string,
    reviewSummary: string,
    price: string,
    isLiked: boolean
}

interface IInitialState {
    gamesList: IPost[],
    isPrise: boolean,
    showLiked: boolean,
    searchText: string,

}



const initialState: IInitialState = {
    gamesList: [],
    isPrise: true,
    showLiked: false,
    searchText: ''
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addLiked: (state, action) => {
            state.gamesList.map((i: IPost) => {
                if (i.appId === action.payload) {
                    return { ...i, isLiked: true }
                } else {
                    return i;
                }
            })
        },
        removeLiked: (state, action) => {
            state.gamesList.map((i: IPost) => {
                if (i.appId === action.payload) {
                    return { ...i, isLiked: false }
                } else {
                    return i;
                }
            })
        },
        showLiked: (state, action) => {
            state.showLiked = action.payload
        },
        uploadData: (state, action) => {
            state.gamesList = action.payload
        },
        priceToBigger: state => {
            state.gamesList.sort((a, b) => {
                return Number(a.price) - Number(b.price)
            })
        },
        sortByRelease: (state, action) => {
            state.gamesList.sort((a: IPost, b: IPost): any => {
                const x = dayjs(a.released)
                const y = dayjs(b.released)
                if (x.isValid() && y.isValid()) return x.diff(y) * action.payload
                else if (x.isValid() && !y.isValid()) return -1
                else if (!x.isValid() && y.isValid()) return 1
                else return 1
            })
        },
        sortByPrice: (state, action) => {
            state.gamesList.sort((a, b) => {
                const x = Number(a.price.trim().slice(0, -1).replace(/,/, '.'))
                const y = Number(b.price.trim().slice(0, -1).replace(/,/, '.'))
                if (!Number.isNaN(x) && !Number.isNaN(y)) return (x - y) * action.payload
                else if (Number.isNaN(x) && y === 0) return 1 * action.payload
                else if (x === 0 && Number.isNaN(y)) return -1 * action.payload
                else if (Number.isNaN(x) && !Number.isNaN(y)) return -1 * action.payload
                else return 1 * action.payload
            })
        },
        changeIsPrice: (state, action) => { state.isPrise = action.payload },
        changeSearchText: (state, action) => {
            state.searchText = action.payload
        },
    }

})


export const { actions, reducer } = gamesSlice

export const { addLiked, removeLiked, showLiked, uploadData, priceToBigger, sortByRelease, changeIsPrice, sortByPrice, changeSearchText } = actions
