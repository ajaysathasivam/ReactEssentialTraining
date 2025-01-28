import { useContext } from "react"
import Button from "../../Components/Button/Button"
import { PopUpInput } from "../../Components/PopUpInput/PopUpInput"
import "./Home.scss"
import { Context } from "../../Provider/Provider"
import ShowTasks from "../../Components/ShowTasks/ShowTasks"

const Home = () => {
    const { showInputCard, setValueToInputCard } = useContext(Context)

    const handleClick = () => {
        setValueToInputCard(true)

    }

    return (
        <>
            <div className="container">

                <PopUpInput />
                <div className="d-flex justify-content-center my-4">
                    <h1>Task Manager</h1>
                </div>
                <div className="row ">
                    <div className="col d-flex  justify-content-end mx-5">
                        <Button onClick={handleClick} className="btn btn-primary" buttonContent="Add Task" />
                    </div>
                </div>
                <ShowTasks />
            </div>
        </>
    )
}

export default Home