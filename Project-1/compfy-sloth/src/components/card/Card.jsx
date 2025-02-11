import React from 'react'
import "./Card.scss"
const Card = ({children,className}) => {
  return (
    <div className={className+" "+'text-center p-4 m-1 rounded '}>{children}</div>
  )
}

export default Card