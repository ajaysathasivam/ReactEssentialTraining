import React, { useReducer, useState } from 'react'

const Reducers = () => {
  const [state, setState] = useState(0);
  const logic = (state, action) => {
    switch (action) {
      case "inc":
        return state = state + 1
      default:
        return state

    }
  }
  const [reducerState, dispatch] = useReducer(logic, 0)
  const handleState = () => {
    setState(pre => pre + 1)
  }
  const handleReduer = () => {
    dispatch('inc')
  }

  return (
    <div>Reducers
      <p>State: {state}</p>
      <p>Reducer: {reducerState}</p>
      <button onClick={() => handleState()}>Modify State</button>
      <button onClick={() => handleReduer()}>Modify Reducer State</button>
    </div>
  )
}

export default Reducers