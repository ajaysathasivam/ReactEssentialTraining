import { createContext, useState } from "react"
export const Context = createContext();
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const initForm = [
    
  ]
  const [getFromUser, setUserInput] = useState(initForm)
  const [showInputCard, setValueToInputCard] = useState(false)
  const [collectValues, setValueToCollect] = useState({})
  const [mode,setMode]=useState("view")
  const values = {
    getFromUser,
    setUserInput,
    showInputCard,
    setValueToInputCard,
    collectValues,
    setValueToCollect,
    mode,
    setMode
  }
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider