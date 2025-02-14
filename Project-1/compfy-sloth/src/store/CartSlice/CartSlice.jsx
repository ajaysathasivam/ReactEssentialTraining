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
            const item = [...state.items, action.payload]
            state.items = item
            localStorage.setItem("cart",JSON.stringify(item))
        }
    }
})

export const { setCartValue } = cartSlice.actions
export default cartSlice.reducer
