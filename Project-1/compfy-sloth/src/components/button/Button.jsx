import React from 'react'

const Button = ({className,text,onClick}) => {
  return (
    <button className={className} onClick={onClick}>{text.toUpperCase()}</button>
  )
}

export default Button