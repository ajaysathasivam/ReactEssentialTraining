import React from 'react'

const PosterRow = ({titleValue,description}) => {
  return (
    <div className="row align-items-center my-2">
    <div className="col-2">
      <span className="fw-bold chead-color ">{titleValue}:</span>
    </div>
    <div className="col">
      <span className="phead-color px-5 text-capitalize">{description}</span>
    </div>
  </div>
  )
}

export default PosterRow