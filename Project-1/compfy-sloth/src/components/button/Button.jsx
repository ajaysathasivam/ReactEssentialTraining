import React from 'react'

const Button = ({className,text,onClick}) => {
  return (
    <button className={`${className} px-4 py-6`} onClick={onClick}>{text}</button>
  )
}

export default Button