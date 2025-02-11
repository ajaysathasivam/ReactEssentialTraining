import React from "react";

const Icon = ({className} ) => {
  return <i className={className}></i>;
};
const Icons = ({className,text}) => {
return(
  <div >
    <Icon className={className} />
    {text}
  </div>
);
};

export default Icons;
