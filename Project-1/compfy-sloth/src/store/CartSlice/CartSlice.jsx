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
            localStorage.setItem("cart", JSON.stringify(item))
        },
        setClerCart: (state, action) => {
            state.items = []
            localStorage.setItem('cart', JSON.stringify([])
            )
        }
    }
})

export const { setCartValue, setClerCart } = cartSlice.actions
export default cartSlice.reducer
