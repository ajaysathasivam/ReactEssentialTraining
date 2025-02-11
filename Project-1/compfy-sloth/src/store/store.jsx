import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from './productsSlice/ProductsSlice'

export const store = configureStore({
  reducer: {
    products:productsReducer
  },
})