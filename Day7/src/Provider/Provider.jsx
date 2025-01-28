import {  createContext, useState} from "react"
export const Context = createContext();
const Provider = ({children}) => {
    const [getFromUser, setUserInput] = useState([])
    const [showInputCard, setValueToInputCard]=useState(false)
    const values ={
        getFromUser,
        setUserInput,
        showInputCard, 
        setValueToInputCard
    }
  return (
    <Context.Provider value={values}>
    {children}
    </Context.Provider>
  )
}

export default Provider