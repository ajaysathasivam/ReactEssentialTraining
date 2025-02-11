import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
  }
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setValue:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {setValue} = ProductsSlice.actions
export default ProductsSlice.reducer
