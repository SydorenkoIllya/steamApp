import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICarouselInitialState {
    currentPage: number
}


const initialState: ICarouselInitialState = {
    currentPage: 1
}

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        pageChanged: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
})

const {actions, reducer} = carouselSlice


// export const {selectAll} = carouselAdapter.getSelectors((state: ICarouselInitialState) => state.currentPage);


export default reducer

export const  {pageChanged} = actions





