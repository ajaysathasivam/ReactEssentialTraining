import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice/ProductsSlice'
import cartReducer from "./CartSlice/CartSlice.jsx"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
})