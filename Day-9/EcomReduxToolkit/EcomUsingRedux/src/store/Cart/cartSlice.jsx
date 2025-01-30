import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  quantity: 1,
  total:0,
  cartItems: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    selectedObj: (state, { payload }) => {
      const prev = [...state.cartItems];
      state.cartItems = [...prev, payload];
    },
    updateQuantityInc: state => {
      state.quantity += 1
    },
    updateQuantityDec: state => {
      if(state.quantity>=1){
        state.quantity = 1
      }
      else{
        state.quantity -= 1
      }
    },
    total:state=>{
      const total =parseInt(state.total)*parseInt(state.quantity)
      console.log(total)
      state.total =total
    }
  }
})
// Action creators are generated for each case reducer function
export const { increment, decrement, selectedObj,updateQuantityInc, updateQuantityDec,total } = cartSlice.actions
export default cartSlice.reducer