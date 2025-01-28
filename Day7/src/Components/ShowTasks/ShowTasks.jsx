import { useContext } from "react"
import { Context } from "../../Provider/Provider"
import Button from "../Button/Button"

const ShowTasks = () => {
    const { getFromUser } = useContext(Context)
    console.log("coloe", ...getFromUser)
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

            {getFromUser.map((taskTitle,index) => (
                <div key={index} className="row d-flex justify-content-around my-5 py-2 align-items-center">
                    <div className="col text-center ">
                        <p className="h5   ">{taskTitle}</p>
                    </div>
                    <div className="col text-center border-start border-end">
                        <p className="h5">open</p>
                    </div>
                    <div className="col text-center">
                        <p className="h5 ">
                            <Button className="btn btn-success" buttonContent="Edit" />
                            |
                            <Button className="btn btn-danger" buttonContent="Delete" />
                        </p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ShowTasks