import { useContext } from "react"
import { Context } from "../../Provider/Provider"
import Button from "../Button/Button"

const ShowTasks = () => {
    const {
        getFromUser,
        setValueToInputCard,
        setValueToCollect,
        setUserInput,
        setMode } = useContext(Context)
    const handleEditClick = (index) => {
        setMode('edit')
        setValueToInputCard(true)
        const selectedTask = getFromUser.find((_, TaskObjsPosition) => (TaskObjsPosition === index))
        setValueToCollect({ ["title"]: selectedTask.title, ["id"]: index })
    }
    const handleDelClick = (index) => {
        const OthersTaskList = getFromUser.filter((_, TaskObjsPosition) => (TaskObjsPosition !== index))
        setUserInput([...OthersTaskList])
    }
    return (
        <>
            <div className="row d-flex justify-content-around my-5 border   py-2 align-items-center">
                <div className="col text-center">
                    <p className="h5">Task Titles</p>
                </div>
                <div className="col text-center border-start border-end">
                    <p className="h5">Status</p>
                </div>
                <div className="col text-center">
                    <p className="h5"><span>Edit</span>|<span>Delete</span></p>
                </div>
            </div>

            {getFromUser?.map((taskTitleObj, index) => (
                <div key={index} className="row d-flex justify-content-around my-5 py-2 align-items-center">
                    <div className="col text-center ">
                        <p className="h5   ">{taskTitleObj.title}</p>
                    </div>
                    <div className="col text-center border-start border-end">
                        <p className="h5">{
                            taskTitleObj?.status == 0 ? "open" : taskTitleObj?.status == 1 ? "Progress" : taskTitleObj?.status==2 ? "completed" : null}
                        </p>
                    </div>
                    <div className="col text-center">
                        <p className="h5 ">
                            <Button className="btn btn-success" buttonContent="Edit" onClick={() => handleEditClick(index)} />
                            |
                            <Button className="btn btn-danger" buttonContent="Delete" onClick={() => handleDelClick(index)} />
                        </p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ShowTasks