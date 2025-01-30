
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}
const counterSlice2 = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        inc: (state) => {
            state.value += 2
        },
        dec: (state) => {
            state.value -= 2
        }
    }

})
export const { inc, dec }=counterSlice2.actions
export default counterSlice2.reducer