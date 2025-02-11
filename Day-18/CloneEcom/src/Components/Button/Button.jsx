import React from 'react'
import Icons from '../Icons/Icons'

const Button = ({iconClassName, btnClassName, text,onClick}) => {
  return (
    <button className={`${btnClassName} d-flex align-items-center`}onClick={onClick}>
        <Icons className={iconClassName}/>
        <span>{text}</span>
    </button>
  )
}

export default Button