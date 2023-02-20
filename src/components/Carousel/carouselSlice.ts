import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICarouselInitialState {
    currentPage: number,
    offset: number,
    count: number
}


const initialState: ICarouselInitialState = {
    currentPage: 1,
    offset: 0,
    count: 1
}

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        pageChanged: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setPlusOffset: state => {
            state.offset += 108
        },
        setMinusOffset: state => {
            state.offset -= 108
        },
        setPlusCount: state => {
            state.count += 1
        },
        setMinusCount: state => {
            state.count -= 1
        },
        defaulSetForFilters: (state, action) => {
            state.currentPage = action.payload
            state.count = 1
            state.offset = 0
        }
    }
})

const { actions, reducer } = carouselSlice


export default reducer

export const { pageChanged, setPlusOffset, setMinusOffset, setPlusCount, setMinusCount, defaulSetForFilters } = actions





