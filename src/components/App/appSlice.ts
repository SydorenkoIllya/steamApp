import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    clickElem: any

}



const initialState: IInitialState = {
    clickElem: null
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeClickElem: (state, action) => {
            state.clickElem = action.payload
        }
    }

})


export const { actions, reducer } = appSlice

export const { changeClickElem } = actions
