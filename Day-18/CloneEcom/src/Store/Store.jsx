import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../Store/productSlice'
const store = configureStore({
    reducer: {
      products: productSlice ,
    },
  });
  
  export default store;