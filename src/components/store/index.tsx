import {configureStore} from "@reduxjs/toolkit"
import QuestionSlice from "./slices/QuestionSlices";

const store = configureStore({
    reducer : {question : QuestionSlice}
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch