import {configureStore} from "@reduxjs/toolkit"
import ModalSlice from "./slices/ModalSlice";
import QuestionSlice from "./slices/QuestionSlices";

const store = configureStore({
    reducer : {
        question : QuestionSlice,
        news : ModalSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch