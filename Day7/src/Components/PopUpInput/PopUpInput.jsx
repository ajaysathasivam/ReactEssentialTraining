import { useContext } from "react"
import { Context } from "../../Provider/Provider"
import Button from "../Button/Button"

import { ToastContainer, toast } from 'react-toastify';
export const PopUpInput = () => {
    const { 
        showInputCard, 
        setValueToInputCard, 
        setUserInput, 
        getFromUser, 
        collectValues, 
        setValueToCollect,
        // mode,
        // setMode,
        modeState,
        modeDispatcher
    } = useContext(Context)

    const notify = (toastMessage) => toast(toastMessage);
    const handleClick = async () => {
        const existed = getFromUser.findIndex((task, index) => index === collectValues.id)
        if (existed === collectValues.id) {
            getFromUser[existed]["title"] = collectValues.title;
        }
        else {
            setUserInput(pre => ([...pre, { ["title"]: collectValues?.title, ["status"]: 0}]))
        }
        await notify(collectValues?.title + ' ' + "added")
        await setValueToInputCard(false)
        await modeDispatcher('view')
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValueToCollect(pre => ({ ...pre, [name]: value }))
    }
    const handleProgressClick=()=>{
        const existedStatusId = getFromUser.findIndex((task, index) => index === collectValues.id)
        if (existedStatusId === collectValues.id) {
            getFromUser[existedStatusId]["status"] = 1;
            handleClick()
        }
    }
    const handleCompeletedClick=()=>{
        const existedStatusId = getFromUser.findIndex((task, index) => index === collectValues.id)
        if (existedStatusId === collectValues.id) {
            getFromUser[existedStatusId]["status"] = 2;
            handleClick()
        }
    }
    return (
        <>
            <ToastContainer />
            <div className={showInputCard ? "shadow-lg" : "d-none"}>
                <div className="row  ">
                    <div className="col-12 my-3 d-flex justify-content-center"><h5>Add you Task</h5></div>
                    <div className="col-12 my-2 d-flex justify-content-center">
                        <input onChange={(e) => handleChange(e)} value={collectValues?.title} type="text" name="title" id="" className="d-block" />
                    </div>
                    <div className="col-12  my-3 d-flex justify-content-center">

                        <Button onClick={handleClick} className="btn btn-success px-4" buttonContent={"submit"} />
                        {modeState === "edit" ?
                            <>
                                <Button onClick={handleProgressClick} className="btn btn-info mx-2 px-4" buttonContent={"Progress"} />
                                <Button onClick={handleCompeletedClick} className="btn btn-warning px-4" buttonContent={"Compeleted"} />
                            </>
                            : null}
                    </div>
                </div>


            </div>
        </>

    )
}
