import React, { useEffect } from 'react'
import RoutesCom from './routes/Routes'
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './store/productsSlice/ProductsSlice';

const App = () => {
  const cart =useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  localStorage.setItem([cart],cart)
 
  return (
    <>
    <RoutesCom/>
    </>
  )
}

export default App