import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    modalIsVisible : boolean
  }

  const initialState: CounterState = {
    modalIsVisible : false
  }

export const modalSlice = createSlice({
    name : "news",
    initialState,
    reducers :{
        toggle(state) {
            state.modalIsVisible = !state.modalIsVisible
        }
    }
})

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
