import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value:'',
  }
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setValue:(state,action)=>{
            console.log(action.payload,"produc")
            state.value = action.payload
        }
    }
})

export const {setValue} = ProductsSlice.actions
export default ProductsSlice.reducer
