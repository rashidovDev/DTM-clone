import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    questionIsVisible : boolean
  }

  const initialState: CounterState = {
    questionIsVisible : false
  }

export const questionSlice = createSlice({
    name : "question",
    initialState,
    reducers :{
        toggle(state) {
            state.questionIsVisible = !state.questionIsVisible
        }
    }
})

export const questionAction = questionSlice.actions;
export default questionSlice.reducer;