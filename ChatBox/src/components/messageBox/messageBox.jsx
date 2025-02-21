import React, { useState } from 'react'

const MessageBox = ({message,whoAmI}) => {
  
  // condition
  const owner = whoAmI ==="jon" 
  // style obj
  const inlineStyle = {
    fullHeight:{height:"60vh"},
}
  return (
    <div className="col-12 d-flex flex-column  overflow-auto " style={inlineStyle.fullHeight}>
      {message.map((user,idx)=>(
        owner === user.userName?
        <div className='border rounded ms-0 my-2 w-75 p-3' key={idx} >
        <p>{whoAmI}</p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sequi repellendus sunt corporis quia id! Minus cum dolore, sit, tempora laboriosam tempore distinctio voluptas asperiores eos nobis dignissimos placeat laborum? </div>
      :
      <div className='border rounded  my-2 align-self-end w-75 p-3  text-end'>
      <p>{whoAmI}</p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sequi repellendus sunt corporis quia id! Minus cum dolore, sit, tempora laboriosam tempore distinctio voluptas asperiores eos nobis dignissimos placeat laborum? </div> 

      ))}
  

    </div>
  )
}

export default MessageBox