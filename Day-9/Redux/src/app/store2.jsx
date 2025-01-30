import { configureStore } from "@reduxjs/toolkit";
import counter2Reducer from "../features/counter2/counterSliceReducer"
export const store2 = configureStore({
    reducer:{
        counter2 : counter2Reducer
    },
})

