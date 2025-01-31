import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  // quantity:[],
  quantity: 1,
  cart_total: 0,
  total: 0,
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
    addToCart: (state, { payload }) => {
      const { id, obj } = payload;
      const prev = [...state.cartItems];
      const existIndex = prev?.findIndex((curr) => curr.id === id);
      if (existIndex !== -1) {
        prev[existIndex]['quantity'] = prev[existIndex]['quantity'] + 1;
        prev[existIndex]['sub_total'] = prev[existIndex]['sub_total'] + prev[existIndex]['price'];
        state.cartItems = prev;
        state.cart_total = state.cart_total + prev[existIndex]['price']
      } else {
        const newItem = obj;
        newItem['quantity'] = 1;
        newItem['sub_total'] = obj['price'];
        // state.total =state.total+  newItem['sub_total']
        state.cartItems = [...prev, newItem]
        state.cart_total = state.cart_total + obj['price']
      }
    },
    updateCartQty: (state, { payload }) => {
      const { id, qty, type } = payload;
      // Option 1
      const prev = [...state.cartItems];
      const existIndex = prev?.findIndex((curr) => curr.id === id);
      if (existIndex !== -1) {
        prev[existIndex]['quantity'] = qty;
        prev[existIndex]['sub_total'] = Number(qty * prev[existIndex]['price']).toFixed(2);
        // state.total =Number(prev[existIndex]['sub_total'])+state.total
        state.cartItems = prev
        state.cart_total = type === 'inc' ? state.cart_total + prev[existIndex]['price'] : state.cart_total - prev[existIndex]['price']
      }
      // //Option 2 
      //   if (existIndex !== -1) {
      //     if (type === 'inc') {
      //       prev[existIndex]['quantity'] = prev[existIndex]['quantity'] + 1;
      //     }
      //     else{
      //       prev[existIndex]['quantity'] = prev[existIndex]['quantity'] - 1;
      //     }
      //   }      
    },
    selectedObj: (state, { payload }) => {
      const prev = [...state.cartItems];
      state.cartItems = [...prev, payload];
    },
    updateTotal: state => {
      const sub_total = state.cartItems.map((obj) => obj.sub_total)
      //     reduce((acc, current) => acc + current, 0)) // reduce each inner array to sum
      // .reduce((acc, current) => acc + current, 0);
      const total = sub_total.reduce((acc, curr) => acc + curr)
      state.total = total
      //  const tt = state.cartItems.map((obj)=>{
      //   for(let key in obj){
      //     if(key === "sub_total"){
      //         state.total = obj[key] + state.total
      //     }
      //   }
      //  })
      //   console.log(tt)
    },
    // updateQuantityDec: state => {
    //   if (state.quantity >= 1) {
    //     state.quantity = 1
    //   }
    //   else {
    //     state.quantity -= 1
    //   }
    // },
    // updateQuantityReset: state => {
    //   console.log("it run")
    //   state.quantity = 1
    // },
    // total: state => {
    //   const total = parseInt(state.total) * parseInt(state.quantity)
    //   console.log(total)
    //   state.total = total
    // }
  }
})
// Action creators are generated for each case reducer function
export const {
  addToCart,
  updateCartQty,
  increment,
  decrement,
  selectedObj,
  updateQuantityInc,
  updateQuantityDec,
  updateTotal,
  updateQuantityReset } = cartSlice.actions
export default cartSlice.reducer