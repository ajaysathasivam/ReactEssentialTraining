import { useReducer } from "react";
import { createContext, useState } from "react"
export const Context = createContext();
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const initForm = [

  ]
  const initMode = "";
  function modeChangerFn(state, action) {
    switch (action) {
      case "view":
        return  state = "view"
      case "edit":
        return state="edit"
      default:
       return  state = "view"
    }
  }
  const [getFromUser, setUserInput] = useState(initForm)
  const [showInputCard, setValueToInputCard] = useState(false)
  const [collectValues, setValueToCollect] = useState({})
  const [modeState, modeDispatcher] = useReducer(modeChangerFn, initMode)
  const values = {
    getFromUser,
    setUserInput,
    showInputCard,
    setValueToInputCard,
    collectValues,
    setValueToCollect,
    modeState,
    modeDispatcher
  }
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider