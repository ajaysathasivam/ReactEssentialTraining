
const Button = ({className,buttonContent,onClick:handleClick}) => {
  return (
    <button className={className} onClick={handleClick}>{buttonContent}</button>
  )
}

export default Button