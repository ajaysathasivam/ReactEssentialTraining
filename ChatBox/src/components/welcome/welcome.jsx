import React from 'react'

const Welcome = ({username}) => {
  return (
    <div className="col-12">
        <h1 className='my-3'>Welcome {username}</h1>
    </div>
  )
}

export default Welcome