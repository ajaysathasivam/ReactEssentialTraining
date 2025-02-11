import React from 'react'
const Input = ({type, name,value,onChange,className,placeholder,required,label , style})=>{
return (
<>
    {label && <label className="form-label ">{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      required={required}
      style={style}
    />
</>
);
};
export default Input