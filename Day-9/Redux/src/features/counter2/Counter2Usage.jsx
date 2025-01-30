import { useSelector, useDispatch } from "react-redux";
import { dec, inc } from "./counterSliceReducer"


const Counter2 = () => {
    const count2 = useSelector((state)=>state.counter2.value)
    console.log(count2, '3')
    const dispatch2 = useDispatch()
    const hanldeInc = ()=>{
        dispatch2(inc())
    }
    const hanldeDec = ()=>{
        dispatch2(dec())
    }
    return (
        <>
        <div>Hello counter 2</div>
        <p>{count2}</p>
        <button onClick={()=>(hanldeInc())}>Inc</button>
        <button onClick={()=>(hanldeDec())}>Dec</button>
        
        </>
    )
}
export default Counter2