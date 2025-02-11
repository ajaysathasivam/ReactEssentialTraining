import React from 'react'

const Filter = () => {
    const addFormInput = [
        { name: "Vegetable", value: "vegetable", type: "checkbox" },
        { name: "Vegetable", value: "vegetable", type: "checkbox" },
        { name: "Fruits", value: "fruits", type: "checkbox" },
      ];
    
  return (
    <div className='border w-100 p-2'>
        <form action="" className='d-flex  flex-column' >
            {addFormInput.map((checkbox)=>(
                <div>
                <input className='mx-2' type={checkbox.type} value={checkbox.value} />
                <label>{checkbox.name}</label>
                </div>
            ))}
        </form>
    </div>
  )
}

export default Filter