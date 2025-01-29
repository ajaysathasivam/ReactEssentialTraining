import { useContext } from "react"
import { Context } from "./Provider/Provider"

const App = () => {

  const {reduceState,reduceDispatch, test, setTest } =useContext(Context)
 
  const handleReducer = (type) => {
    if(type ==="dec"){
      reduceDispatch({type:'dec',count:1})  
    }
    else{
      reduceDispatch({type:'inc',count:1})  
    }
  }
  // console.log("log",reduceState.value);
  const handleModifigation = ()=>{
    setTest(preserve=>(Object.assign({},preserve,{"age":30})))
  }
  return (
    <div>
      
      <button onClick={() => handleReducer("dec")} >-</button>
      <p>Current Value: {reduceState.count}</p>
      <button onClick={() => handleReducer("inc")} >+</button>
      <p>{test.name}</p>
      <p>{test.age}</p>

      <button onClick={()=> handleModifigation()} >set Object value</button>
    </div>

  )
}

export default App



// Change 1
// const { dispatch = () => { }, state } = useContext(Context)
// const handleReducer = () => {
//   dispatch({ type: 'INCREMENT' });  
// }