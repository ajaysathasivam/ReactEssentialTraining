import { useContext, useState } from "react"
import { Context } from "../../Provider/Provider"
import Button from "../Button/Button"

import { ToastContainer, toast } from 'react-toastify';
export const PopUpInput = () => {
    const { showInputCard, setValueToInputCard, setUserInput, getFromUser } = useContext(Context)
    const [collectValues, setValueToCollect] = useState({})
    const notify = (toastMessage) => toast(toastMessage);
     const   handleClick = async () => {
        
        await notify(getFromUser?.task+' ' +"added")
        await  setValueToInputCard(false)
        setUserInput(pre=>[...pre,collectValues.value])
        // setUserInput([...getFromUser,updateTask])
        

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValueToCollect(pre=>({...pre,value}))
        
        

    }
    return (
        <>
        <ToastContainer/>
            <div className={showInputCard ? "shadow-lg" : "d-none"}>
                <div className="row  ">
                    <div className="col-12 my-3 d-flex justify-content-center"><h5>Add you Task</h5></div>
                    <div className="col-12 my-2 d-flex justify-content-center">
                        <input onChange={(e) => handleChange(e)} value={getFromUser?.task} type="text" name="task" id="" className="d-block" />
                    </div>
                    <div className="col-12  my-3 d-flex justify-content-center">

                        <Button onClick={handleClick} className="btn btn-success px-4" buttonContent={"submit"} />
                    </div>
                </div>


            </div>
        </>

    )
}
