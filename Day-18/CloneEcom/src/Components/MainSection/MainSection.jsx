import React from 'react'
import { Outlet } from 'react-router-dom'

const MainSection = () => {
  return (
    <div className='mx-5 '>
      <Outlet/>
    </div>
  )
}

export default MainSection