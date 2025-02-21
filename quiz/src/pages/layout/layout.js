import React from 'react'
import {Outlet}from "react-router-dom"
const Layout = () => {
  return (
    <div>
        <heaer></heaer>
        <Outlet/>
        <fouter></fouter>
    </div>
  )
}

export default Layout