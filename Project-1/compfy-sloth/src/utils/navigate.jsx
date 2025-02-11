import React from 'react'
import { useNavigate } from 'react-router-dom'

const navigate = ({path}) => {
    const navigate = useNavigate()
  return (
    navigate(path)
  )
}

export default navigate