import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: ''
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartValue: (state, action) => {
            console.log(action.payload)
            state.items = [...state.items, action.payload]
        }
    }
})

export const { setCartValue } = cartSlice.actions
export default cartSlice.reducer
